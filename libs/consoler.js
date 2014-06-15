var path = require('path');
var color = require('colors');
var utils = require('./util');
var colors = require('./shorthands');
var pkg = path.resolve(__dirname, '../package.json');
var sys = utils.parent() || require(pkg);
var logo = utils.capf(sys.name).cyan + ' ' + sys.version.grey;
var edge = 7;

exports.log = function(action, text) {
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

exports.add = function(action, color) {
  if (action && color) colors[action] = color;
  return colors;
}

exports.align = function(e) {
  if (!(e && typeof(e) === 'number')) return false;
  edge = e;
  return edge;
}

Object.keys(colors).forEach(function(key){
  exports[key] = function(text) {
    if (!text) return false;
    return exports.log(key, text);
  }
})
