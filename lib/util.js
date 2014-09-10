var fs = require('fs');
var path = require('path');
var pkg = path.resolve(__dirname, '../../../package.json');

exports.isObject = isObject;
exports.parent = fetchParent;
exports.filltext = filltext;
exports.uppercaseFirstLetter = uppercaseFirstLetter;

function uppercaseFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function filltext(edge, text) {
  text = text.toString();
  if (text && text.length < edge)
    return text + blanks(edge - text.length);
  return text;
}

function blanks(number) {
  var blanks = [];
  for (var i = 0; i < number; i++) {
    blanks.push(' ')
  }
  return blanks.join('');
}

function fetchParent() {
  try
    return JSON.parse(fs.readFileSync(pkg));
  catch (e)
    return undefined;
}

function isObject(obj) {
  return obj && typeof obj === 'object';
}
