// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_isFinal_basic.phpt
  it("ReflectionClass::isFinal() method", function () {
    expect(parser.parseCode("<?php\nclass TestClass {}\nfinal class TestFinalClass {}\n$normalClass = new ReflectionClass('TestClass');\n$finalClass = new ReflectionClass('TestFinalClass');\nvar_dump($normalClass->isFinal());\nvar_dump($finalClass->isFinal());\n?>")).toMatchSnapshot();
  });
});
