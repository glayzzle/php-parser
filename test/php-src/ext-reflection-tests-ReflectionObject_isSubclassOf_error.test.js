// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionObject_isSubclassOf_error.phpt
  it("ReflectionObject::isSubclassOf() - invalid params", function () {
    expect(parser.parseCode("<?php\nclass A {}\n$ro = new ReflectionObject(new A);\nvar_dump($ro->isSubclassOf('X'));\n?>")).toMatchSnapshot();
  });
});
