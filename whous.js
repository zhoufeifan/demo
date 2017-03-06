var fs = require('fs');

// var ignore_suffix = ['.sourceMap.js'];
  
var files = {};
function getWhatJSWeNeed(dir) {
  files = {};
  var _modname_prefix = dir.match(/([^\/]+)\/*$/)[1];
  _recursion(dir, _modname_prefix);
  console.log(files)
  return files;
}

function _recursion(_recursion_dir, _modname_prefix) {
  var dirs = fs.readdirSync(_recursion_dir);
  var matchs = [];
  dirs.forEach(function (item) {
    var path = _recursion_dir + item;
    if (isFile(path)) {
      matchs = item.match(/(.+)\.(js|jsx)$/);
      if (matchs) {
        files[_modname_prefix + '/' + matchs[1]] = _recursion_dir + matchs[1];
      }
    } else if (isDir(path)) {
      _recursion(path + '/', _modname_prefix + '/' + item);
    }
  });
}

function isFile(path) {
  return fs.existsSync(path) && fs.statSync(path).isFile();
}
function isDir(path) {
  return fs.existsSync(path) && fs.statSync(path).isDirectory();
}

module.exports = function(dir) {
  if( !/\/$/.test(dir) ) {
    dir += '/';
  }
  return getWhatJSWeNeed(dir, '');
}