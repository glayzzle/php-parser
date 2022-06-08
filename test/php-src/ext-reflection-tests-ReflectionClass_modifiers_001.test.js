// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_modifiers_001.phpt
  it("Modifiers", function () {
    expect(parser.parseCode("<?php\nabstract class A {}\nclass B extends A {}\nclass C {}\nfinal class D {}\ninterface I {}\n$classes = array(\"A\", \"B\", \"C\", \"D\", \"I\");\nforeach ($classes as $class) {\n    $rc = new ReflectionClass($class);\n    var_dump($rc->isFinal());\n    var_dump($rc->isInterface());\n    var_dump($rc->isAbstract());\n    var_dump($rc->getModifiers());\n}\n?>")).toMatchSnapshot();
  });
});
