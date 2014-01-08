var fs = require('fs'),
    path = require('path');

exports.capf = function(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

exports.blanks = function(number) {
    var blanks = [];
    for (var i = 0; i < number; i++) {
        blanks.push(' ');
    };
    return blanks.join('');
};

exports.filltext = function(edge, text) {
    if (text && text.length < edge) return text + exports.blanks(edge - text.length);
    return text;
};

exports.parent = function() {
    try {
        return JSON.parse(fs.readFileSync(path.resolve(__dirname, '../../../package.json')));
    } catch (e) {
        return undefined;
    };
};
