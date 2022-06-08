// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_isAnonymous.phpt
  it("ReflectionClass::isAnonymous() method", function () {
    expect(parser.parseCode("<?php\nclass TestClass {}\n$declaredClass = new ReflectionClass('TestClass');\n$anonymousClass = new ReflectionClass(new class {});\nvar_dump($declaredClass->isAnonymous());\nvar_dump($anonymousClass->isAnonymous());\n?>")).toMatchSnapshot();
  });
});
