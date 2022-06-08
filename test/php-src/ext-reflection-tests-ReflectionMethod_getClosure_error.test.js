// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_getClosure_error.phpt
  it("Test ReflectionMethod::getClosure() function : error functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ReflectionMethod::getClosure() : error conditions ***\\n\";\nclass StaticExample\n{\n    static function foo()\n    {\n        var_dump( \"Static Example class, Hello World!\" );\n    }\n}\nclass Example\n{\n    public $bar = 42;\n    public function foo()\n    {\n        var_dump( \"Example class, bar: \" . $this->bar );\n    }\n}\n// Initialize classes\n$class = new ReflectionClass( 'Example' );\n$staticclass = new ReflectionClass( 'StaticExample' );\n$method = $class->getMethod( 'foo' );\n$staticmethod = $staticclass->getMethod( 'foo' );\n$object = new Example();\n$fakeobj = new StdClass();\necho \"\\n-- Testing ReflectionMethod::getClosure() function with invalid object --\\n\";\ntry {\n        var_dump( $method->getClosure( $fakeobj ) );\n} catch( Exception $e ) {\n        var_dump( $e->getMessage() );\n}\n?>")).toMatchSnapshot();
  });
});
