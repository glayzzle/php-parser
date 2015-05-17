/**
 * Copyright (C) 2014 Glayzzle (BSD3 License)
 * @authors https://github.com/glayzzle/php-parser/graphs/contributors
 * @url http://glayzzle.com
 */
var child_process = require('child_process');
var fs = require('fs');

module.exports = {
  exec: function(command) {
    if (fs.existsSync('done')) {
      fs.unlinkSync('done');
    } 
    // Run the command in a subshell
    child_process.exec(command + ' 2>&1 1>output && echo done! > done');
    // Block the event loop until the command has executed.
    while (!fs.existsSync('done')) {
      // Do nothing
    }
    // Output
    return { stdout: fs.readFileSync('output') };
  }
};