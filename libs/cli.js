var vm = require('vm');
var fs = require('fs');
var path = require('path');
var spawn = require('child_process').spawn;
var Macros = require('comment-macros');
var macro = new Macros;

macro.use(function(label) {
  return 'console.log("' + label + '")';
});

macro.use(function(label) {
  if (0 == label.indexOf('start ')) {
    return 'console.time("' + label + '")';
  }
  if (0 == label.indexOf('end ')) {
    return 'console.timeEnd("' + label + '")';
  }
});

module.exports = function() {

  var home = process.cwd();
  var script = process.argv[2];
  var scriptPath = path.join(home, script);
  console.log(scriptPath);

  if (!script) return;
  if (!fs.existsSync(scriptPath)) throw new Error('can not find script');

  try {
    var scriptText = fs.readFileSync(scriptPath);
    var compiledScript = macro.process(scriptText.toString());
    return vm.runInNewContext(compiledScript);
  } catch (err) {
    throw err;
  }

}