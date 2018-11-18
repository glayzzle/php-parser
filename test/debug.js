/**
{
  // Use IntelliSense to learn about possible attributes.
  // Hover to view descriptions of existing attributes.
  // For more information, visit: https://go.microsoft.com/fwlink/?linkid=830387
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Launch Program",
      "program": "${workspaceFolder}/test/debug.js"
    }
  ]
}
 */
var parser = require("../src/index");
parser.parseEval(`
new foo;
$a = (new foo)[0];
`, { 
    parser: {
      debug: true
    }
  }
);