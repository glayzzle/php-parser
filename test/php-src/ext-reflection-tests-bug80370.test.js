// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug80370.phpt
  it("Bug #80370: Segfault on ReflectionProperty::getAttributes of dynamic property", function () {
    expect(parser.parseCode("<?php\nclass Foobar {\n}\n$foobar = new Foobar();\n$foobar->bar = 42;\n$reflectionObject = new ReflectionObject($foobar);\n$reflectionProperty = $reflectionObject->getProperty('bar');\nvar_dump($reflectionProperty->getAttributes());")).toMatchSnapshot();
  });
});
