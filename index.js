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
    colorMap = require('./colors.json'),
    sys = require('./package.json');

try {sys = JSON.parse(fs.readFileSync('../../package.json'))} catch (e) {};

var capf = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = function(action, text) {
    var pkgtag = sys.name.magenta + '@' + sys.version;
    if (!text) var text = action,action = 'info';
    var c = colorMap[action] ? colorMap[action] : 'yellow';
    return console.log(pkgtag + color[c](' [ ' + capf(action) + ' ]') + ' ' + text);
};