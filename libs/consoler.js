var path = require('path');
var color = require('colors');
var _ = require('underscore');
var util = require('./util');
var colors = require('./shorthands');
var sys = util.parent() || require(path.resolve(__dirname, '../package.json'));
var logo = util.capf(sys.name).cyan + ' ' + sys.version;
var edge = 7;

/**
 *
 * Rewrite for console.log method
 * @action[String]: the action short name
 * @text[Object | String]: the text or object will be show.
 *
 **/
exports.log = function(action, text) {

  if (!text) {
    var text = action;
    var action = 'info';
  }

  if (_.isObject(text)) {
    return console.log(text);
  }

  var thecolor = colors[action] ? colors[action] : 'yellow';

  return console.log([
    logo,
    color[thecolor](' ' + util.filltext(edge, util.capf(action)) + ' '),
    ' ',
    text
  ].join(''));
}

// add new shorthand
exports.add = function(action, color) {
  if (action && color) colors[action] = color;
  return colors;
}

// fill blanks
exports.align = function(e) {
  if (!(e && typeof(e) === 'number')) return false;
  edge = e;
  return edge;
}

// create shorthands
_.each(colors, function(color, key) {
  exports[key] = function(text) {
    if (!text) return false;
    return exports.log(key, text);
  }
})