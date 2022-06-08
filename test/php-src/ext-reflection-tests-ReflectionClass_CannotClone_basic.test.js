// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/reflection/tests/ReflectionClass_CannotClone_basic.phpt
  it("Reflection class can not be cloned", function () {
    expect(parser.parseCode("<?php\n$rc = new ReflectionClass(\"stdClass\");\n$rc2 = clone($rc);\n?>")).toMatchSnapshot();
  });
});
