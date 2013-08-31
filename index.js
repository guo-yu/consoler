//                                __         
//   _________  ____  _________  / /__  _____
//  / ___/ __ \/ __ \/ ___/ __ \/ / _ \/ ___/
// / /__/ /_/ / / / (__  ) /_/ / /  __/ /    
// \___/\____/_/ /_/____/\____/_/\___/_/     
//
// @breif: another smart console logger
// @author: [turing](http://guoyu.me)

var color = require('colors'),
    sys = require('../../package.json') ? require('../../package.json') : require('./package.json'),
    cr = sys.name.magenta + '@' + sys.version,
    colorMap = require('./colors.json');

console.log(sys);

var capf = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

module.exports = function(action, text) {
    if (!text) var text = action, action = 'info';
    return console.log(cr + color[colorMap[action]](' [ ' + capf(action) + ' ] ') + ' ' + text);
};