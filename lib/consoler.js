var path = require('path');
var color = require('colors');
var utils = require('./util');
var shorthands = require('./shorthands');
var pkgDir = path.resolve(__dirname, '../package.json');
var sys = utils.fetchParent() || require(pkgDir);

module.exports = Consoler;

function Consoler(action, content) {
  return log(action, content);
}

Consoler.add = add;
initKeys();

function initKeys() {
  Object.keys(shorthands).forEach(function(key){
    Consoler[key] = function(text) {
      if (!text) return;
      return log(key, text);
    }
  });
}

function add(action, color) {
  var isValidMethod = action && color;
  if (!isValidMethod) return;
  shorthands[action] = color;
  initKeys();
  return shorthands;
}

function log(action, content) {
  if (!content) {
    var content = action;
    var action = 'info';
  }
  var indent = ' ';
  var isObject = utils.isObject(content);
  console.log([
    '\n',
    // print title and version
    indent + sys.name.cyan + ' ' + 'v'.grey + sys.version.grey,
    // print action
    color[shorthands[action] || 'yellow'](' ' + action + ' '),
    '\n',
    // print contents
    indent + indent + '↳'.grey + indent + indent + (isObject ? JSON.stringify(content) : content),
    '\n'
  ].join(''));
}
