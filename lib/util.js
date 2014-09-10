var fs = require('fs');
var path = require('path');
var parentPkg = '../../../package.json';
var pkg = path.resolve(__dirname, parentPkg);

exports.isObject = isObject;
exports.fetchParent = fetchParent;

function fetchParent() {
  try {
    return JSON.parse(fs.readFileSync(pkg))
  } catch (e) {
    return null;
  }
}

function isObject(obj) {
  return obj && typeof obj === 'object';
}
