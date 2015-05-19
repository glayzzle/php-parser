/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
var child_process = require('child_process');
var fs = require('fs');

module.exports = {
  exec: function(command) {
    if (fs.existsSync('exec.do')) {
      fs.unlinkSync('exec.do');
    } 
    // Run the command in a subshell
    child_process.exec(command + ' 2>&1 1>exec.out && echo done > exec.do');
    // Block the event loop until the command has executed.
    while (!fs.existsSync('exec.do')) {
      // Do nothing
    }
    // Output
    return { stdout: fs.readFileSync('exec.out') };
  },
  checkError: function(file) {
    var cmd = 'php -l ' + file;
    var error = false;
    try {
      error = child_process.execSync(cmd);
    } catch(e) {
      error = e.stdout.toString() + e.stderr.toString();
    }
    error = error.match(/syntax error.*on line ([0-9]+)/i);
    if (error && error.length === 2) {
      return parseInt(error[1]);
    } else {
      return false;
    }
  }
};