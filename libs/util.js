var fs = require('fs');
var path = require('path');
var pkg = path.resolve(__dirname, '../../../package.json');

// make first letter to be uppercase
exports.capf = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Fill blanks to align text
exports.filltext = function(edge, text) {
  text = text.toString();
  if (text && text.length < edge) {
    return text + blanks(edge - text.length);
  }
  return text;
}

// fetch parent JSON
exports.parent = function() {
  try {
    return JSON.parse(
      fs.readFileSync(pkg)
    );
  } catch (e) {
    return undefined;
  }
}

// check if it is object 
exports.isObject = function(obj) {
  return obj && typeof obj === 'object';
}

// fill blanks
function blanks(number) {
  var blanks = [];
  for (var i = 0; i < number; i++) {
    blanks.push(' ')
  }
  return blanks.join('')
}