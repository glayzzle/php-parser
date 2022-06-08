// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionObject_isInstance_basic.phpt
  it("ReflectionObject::isInstance() - basic function test", function () {
    expect(parser.parseCode("<?php\nclass A {}\nclass B extends A {}\nclass X {}\n$classes = array(\"A\", \"B\", \"X\");\n$instances = array(\t\"myA\" => new A,\n                    \"myB\" => new B,\n                    \"myX\" => new X );\nforeach ($classes as $class) {\n    $ro = new ReflectionObject(new $class);\n    foreach ($instances as $name => $instance) {\n        echo \"is $name a $class? \";\n        var_dump($ro->isInstance($instance));\n    }\n}\n?>")).toMatchSnapshot();
  });
});
