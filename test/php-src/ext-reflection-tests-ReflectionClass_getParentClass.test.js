// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getParentClass.phpt
  it("ReflectionClass::getParentClass()", function () {
    expect(parser.parseCode("<?php\nclass Foo {}\nclass Bar extends Foo {}\n$rc = new ReflectionClass(\"Bar\");\n$parent = $rc->getParentClass();\n$grandParent = $parent->getParentClass();\nvar_dump($parent, $grandParent);\n?>")).toMatchSnapshot();
  });
});
