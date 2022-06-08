// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionMethod_getClosureThis.phpt
  it("Reflection::getClosureThis()", function () {
    expect(parser.parseCode("<?php\nclass StaticExample\n{\n    static function foo()\n    {\n        var_dump( \"Static Example class, Hello World!\" );\n    }\n}\nclass Example\n{\n    public $bar = 42;\n    public function foo()\n    {\n        var_dump( \"Example class, bar: \" . $this->bar );\n    }\n}\n// Initialize classes\n$class = new ReflectionClass( 'Example' );\n$staticclass = new ReflectionClass( 'StaticExample' );\n$object = new Example();\n$method = $staticclass->getMethod( 'foo' );\n$closure = $method->getClosure();\n$rf = new ReflectionFunction($closure);\nvar_dump($rf->getClosureThis());\n$method = $class->getMethod( 'foo' );\n$closure = $method->getClosure( $object );\n$rf = new ReflectionFunction($closure);\nvar_dump($rf->getClosureThis());\necho \"Done!\\n\";\n?>")).toMatchSnapshot();
  });
});
