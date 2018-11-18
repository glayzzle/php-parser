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
const parser = require("../src/index");
const ast = parser.parseEval(`
call();
Foo::$var;
`, { 
    parser: {
      debug: true
    }
  }
);
console.log(ast);