var path = require('path');
var color = require('colors');
var utils = require('./util');
var colors = require('./shorthands');
var pkg = path.resolve(__dirname, '../package.json');
var sys = utils.parent() || require(pkg);
var logo = utils.capf(sys.name).cyan + ' ' + sys.version.grey;
var edge = 7;

exports.log = log;
exports.add = add;
exports.align = align;

(function(){
  Object.keys(colors).forEach(function(key){
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
    color[colors[action] || 'yellow'](
      ' ' + utils.filltext(edge, action) + ' '
    ),
    isObject ? '' : ' ' + text
  ].join(''));
  if (isObject) {
    console.log(text);
  }
}

function add(action, color) {
  if (action && color) colors[action] = color;
  return colors;
}

function align(e) {
  if (!(e && typeof(e) === 'number')) return false;
  edge = e;
  return edge;
}
