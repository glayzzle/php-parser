// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/bug53366.phpt
  it("Bug #53366 (Reflection doesn't get dynamic property value from getProperty())", function () {
    expect(parser.parseCode("<?php\nclass UserClass {\n}\n$myClass = new UserClass;\n$myClass->id = 1000;\n$reflect = new ReflectionObject($myClass);\nvar_dump($reflect->getProperty('id'));\nvar_dump($reflect->getProperty('id')->getValue($myClass));\n?>")).toMatchSnapshot();
  });
});
