// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_getClosure_basic.phpt
  it("Test ReflectionMethod::getClosure() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ReflectionMethod::getClosure() : basic functionality ***\\n\";\nclass StaticExample\n{\n    static function foo()\n    {\n        var_dump( \"Static Example class, Hello World!\" );\n    }\n}\nclass Example\n{\n    public $bar = 42;\n    public function foo()\n    {\n        var_dump( \"Example class, bar: \" . $this->bar );\n    }\n}\n// Initialize classes\n$class = new ReflectionClass( 'Example' );\n$staticclass = new ReflectionClass( 'StaticExample' );\n$object = new Example();\n$fakeobj = new StdClass();\n$method = $staticclass->getMethod( 'foo' );\n$closure = $method->getClosure();\n$closure();\n$method = $class->getMethod( 'foo' );\n$closure = $method->getClosure( $object );\n$closure();\n$object->bar = 34;\n$closure();\n?>")).toMatchSnapshot();
  });
});
