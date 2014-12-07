var child_process = require('child_process');
var fs = require('fs');

module.exports = {
  exec: function(command) { 
    // Run the command in a subshell
    child_process.exec(command + ' 2>&1 1>output && echo done! > done');
    // Block the event loop until the command has executed.
    while (!fs.existsSync('done')) {
      // Do nothing
    }
    // Read the output
    var output = fs.readFileSync('output');
    // Delete temporary files.
    fs.unlinkSync('output');
    fs.unlinkSync('done');
    return { stdout: output };
  }
};