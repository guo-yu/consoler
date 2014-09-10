var path = require('path');
var color = require('colors');
var utils = require('./util');
var shorthands = require('./shorthands');
var pkg = path.resolve(__dirname, '../package.json');
var sys = utils.parent() || require(pkg);
var logo = utils.capf(sys.name).cyan + ' ' + sys.version.grey;
var edge = 7;

exports.log = log;
exports.add = add;
exports.align = align;

(function(){
  Object.keys(shorthands).forEach(function(key){
    exports[key] = function(text) {
      if (!text) return;
      return log(key, text);
    }
  });
})();

function log(action, text) {
  if (!text) {
    var text = action;
    var action = 'info';
  }
  var isObject = utils.isObject(text);
  console.log([
    logo,
    color[shorthands[action] || 'yellow'](
      ' ' + utils.filltext(edge, action) + ' '
    ),
    isObject ? '' : ' ' + text
  ].join(''));
  if (isObject) {
    console.log(text);
  }
}

function add(action, color) {
  if (action && color) shorthands[action] = color;
  return shorthands;
}

function align(e) {
  if (!(e && typeof(e) === 'number')) return false;
  edge = e;
  return edge;
}
