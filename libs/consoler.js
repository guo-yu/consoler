var path = require('path'),
    color = require('colors'),
    _ = require('underscore'),
    util = require('./util'),
    colors = require('./shorthands'),
    sys = util.parent() || require(path.resolve(__dirname, '../package.json')),
    edge = 7;

// logger
exports.log = function(action, text) {
    var name = util.capf(sys.name).cyan + ' ' + sys.version;
    if (!text) var text = action, action = 'info';
    if (_.isObject(text)) return console.log(text);
    return console.log(name + color[colors[action] ? colors[action] : 'yellow'](' ' + util.filltext(edge, util.capf(action)) + ' ') + ' ' + text);
};

// add new shorthand
exports.add = function(action, color) {
    if (action && color) colors[action] = color;
    return colors;
};

// fill blanks
exports.align = function(e) {
    if (!(e && typeof(e) == 'number')) return false;
    edge = e;
    return edge;
};

// create shorthands
_.each(colors, function(color, key) {
    exports[key] = function(text) {
        if (!text) return false;
        return exports.log(key, text);
    };
});
