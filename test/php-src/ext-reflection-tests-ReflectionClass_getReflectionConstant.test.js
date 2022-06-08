// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getReflectionConstant.phpt
  it("Test ReflectionClass::getReflectionConstant method", function () {
    expect(parser.parseCode("<?php\n$refleClass = new ReflectionClass(ReflectionClass::class);\nvar_dump(gettype($refleClass->getReflectionConstant('IS_IMPLICIT_ABSTRACT')));\nvar_dump($refleClass->getReflectionConstant('FOO_BAR'));\n?>")).toMatchSnapshot();
  });
});
