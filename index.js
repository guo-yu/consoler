//                                __         
//   _________  ____  _________  / /__  _____
//  / ___/ __ \/ __ \/ ___/ __ \/ / _ \/ ___/
// / /__/ /_/ / / / (__  ) /_/ / /  __/ /    
// \___/\____/_/ /_/____/\____/_/\___/_/     
//
// @breif: another smart console logger
// @author: [turing](http://guoyu.me)

var color = require('colors'),
    fs = require('fs'),
    pkg = require('./pkg'),
    sys = require('./package.json'),
    path = require('path'),
    edge = 7;

try {sys = JSON.parse(fs.readFileSync(path.resolve(__dirname ,'../../package.json')))} catch (e) {};

var capf = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

var pushBlanks = function(number) {
    var blanks = [];
    for (var i = 0; i < number; i++) {
        blanks.push(' ');
    };
    return blanks.join('');
}

var filltext = function(edge, text) {
    if (text && text.length < edge) {
        return text + pushBlanks(edge - text.length);
    } else {
        return text;
    }
};

exports.log = function(action, text) {
    var colorMap = require('./colors.json');
    var pkgtag = capf(sys.name).cyan + ' ' + sys.version;
    if (!text) var text = action,action = 'info';
    var c = colorMap[action] ? colorMap[action] : 'yellow';
    return console.log(pkgtag + color[c](' ' + filltext(edge,capf(action)) + ' ') + ' ' + text);
};

exports.add = function(action, color) {
    var colors = pkg.fetch('/colors.json');
    if (action && color) {
        colors[action] = color;
        pkg.set('/colors.json',colors);
        return colors;
    } else {
        return false;
    }
};

exports.align = function(e) {
    if (e && typeof(e) == 'number') {
        edge = e;
        return true;
    } else {
        return false;
    }
}

// 常用log方法的快捷方式
exports.success = function(text) {
    return exports.log('success',text);
};

exports.error = function(text) {
    return exports.log('error',text);
};

exports.loading = function(text) {
    return exports.log('loading',text);
};