// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_isInterface_basic.phpt
  it("ReflectionClass::isInterface() method", function () {
    expect(parser.parseCode("<?php\ninterface TestInterface {}\nclass TestClass {}\ninterface DerivedInterface extends TestInterface {}\n$reflectionClass = new ReflectionClass('TestInterface');\n$reflectionClass2 = new ReflectionClass('TestClass');\n$reflectionClass3 = new ReflectionClass('DerivedInterface');\nvar_dump($reflectionClass->isInterface());\nvar_dump($reflectionClass2->isInterface());\nvar_dump($reflectionClass3->isInterface());\n?>")).toMatchSnapshot();
  });
});
