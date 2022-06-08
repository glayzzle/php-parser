// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_toString_002.phpt
  it("ReflectionClass::__toString() - verify 'inherits', 'overwrites' and 'prototype' parts of method representation", function () {
    expect(parser.parseCode("<?php\nClass A {\n    function f() {}\n}\nClass B extends A {\n    function f() {}\n}\nClass C extends B {\n}\nClass D extends C {\n    function f() {}\n}\nforeach (array('A', 'B', 'C', 'D') as $class) {\n    echo \"\\n\\n----( Reflection class $class: )----\\n\";\n    $rc = new ReflectionClass($class);\n    echo $rc;\n}\n?>")).toMatchSnapshot();
  });
});
