/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
var child_process = require('child_process');
var fs = require('fs');

module.exports = {
  exec: function(command) {
    var out = "";
    try {
      out = child_process.execSync(cmd).toString();
    } catch(e) {
      out = e.stdout.toString() + e.stderr.toString();
    }
    // Output
    return { stdout: out };
  },
  checkError: function(file) {
    var cmd = 'php -l ' + file;
    var error = false;
    try {
      error = child_process.execSync(cmd).toString();
    } catch(e) {
      error = e.stdout.toString() + e.stderr.toString();
    }
    if (!error) return false;
    error = error.match(/syntax error.*on line ([0-9]+)/i);
    if (error && error.length === 2) {
      return parseInt(error[1]);
    } else {
      return false;
    }
  }
};