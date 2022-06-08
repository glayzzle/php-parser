// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug38194.phpt
  it("Reflection Bug #38194 (ReflectionClass::isSubclassOf() returns TRUE for the class itself)", function () {
    expect(parser.parseCode("<?php\nclass ObjectOne { }\n$objectClass = new ReflectionClass('ObjectOne');\nvar_dump($objectClass->isSubclassOf($objectClass));\n?>")).toMatchSnapshot();
  });
});
