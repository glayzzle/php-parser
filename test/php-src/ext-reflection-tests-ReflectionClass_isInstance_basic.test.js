// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_isInstance_basic.phpt
  it("ReflectionClass::isInstance()", function () {
    expect(parser.parseCode("<?php\nclass A {}\nclass B extends A {}\ninterface I {}\nclass C implements I {}\nclass X {}\n$classes = array(\"A\", \"B\", \"C\", \"I\", \"X\");\n$instances = array(\t\"myA\" => new A,\n                    \"myB\" => new B,\n                    \"myC\" => new C,\n                    \"myX\" => new X );\nforeach ($classes as $class) {\n    $rc = new ReflectionClass($class);\n    foreach ($instances as $name => $instance) {\n        echo \"is $name a $class? \";\n        var_dump($rc->isInstance($instance));\n    }\n}\n?>")).toMatchSnapshot();
  });
});
