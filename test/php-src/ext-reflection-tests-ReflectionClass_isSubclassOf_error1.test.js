// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_isSubclassOf_error1.phpt
  it("ReflectionClass::isSubclassOf() - non-existent class error", function () {
    expect(parser.parseCode("<?php\nclass A {}\n$rc = new ReflectionClass('A');\nvar_dump($rc->isSubclassOf('X'));\n?>")).toMatchSnapshot();
  });
});
