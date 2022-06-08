// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_hasConstant_basic.phpt
  it("ReflectionClass::hasConstant()", function () {
    expect(parser.parseCode("<?php\n//New instance of class C - defined below\n$rc = new ReflectionClass(\"C\");\n//Check if C has constant foo\nvar_dump($rc->hasConstant('foo'));\n//C should not have constant bar\nvar_dump($rc->hasConstant('bar'));\nClass C {\n  const foo=1;\n}\n?>")).toMatchSnapshot();
  });
});
