// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_isAbstract_basic.phpt
  it("ReflectionClass::isAbstract() method", function () {
    expect(parser.parseCode("<?php\nclass TestClass {}\nabstract class TestAbstractClass {}\n$testClass = new ReflectionClass('TestClass');\n$abstractClass = new ReflectionClass('TestAbstractClass');\nvar_dump($testClass->isAbstract());\nvar_dump($abstractClass->isAbstract());\n?>")).toMatchSnapshot();
  });
});
