// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_getName_error1.phpt
  it("ReflectionClass::getName - forbid static invocation", function () {
    expect(parser.parseCode("<?php\nReflectionClass::getName();\n?>")).toMatchSnapshot();
  });
});
