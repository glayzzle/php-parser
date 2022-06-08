// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionObject_getName_error1.phpt
  it("ReflectionObject::getName - forbid static invocation", function () {
    expect(parser.parseCode("<?php\nReflectionObject::getName();\n?>")).toMatchSnapshot();
  });
});
