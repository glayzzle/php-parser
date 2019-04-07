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
const util = require('util');
const parser = require("../src/index");
const ast = parser.parseEval(`
namespace Foospace\\Foo;

/**
 * Class description
 */
class FooClass
{
    /**
     * Description
     */
    public static function bar()
    {
        return $array;
    }

    /**
     * Description
     */
    public static function baz()
    {
        return $array;
    }
  
    /**
     * Description
     */
    public static function woo()
    {
        return $array;
    }
}
`, { 
    parser: {
      debug: true,
      extractDoc: true
    },
    /*ast: {
      withPositions: true,
      withSource: true
    }*/
  }
);
console.log(
  util.inspect(ast, false, 10, true)
);