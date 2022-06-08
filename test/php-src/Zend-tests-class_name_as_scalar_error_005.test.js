// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/class_name_as_scalar_error_005.phpt
  it("class name as scalar from ::class keyword error using static non class context", function () {
    expect(parser.parseCode("<?php\n$x = static::class;\n?>")).toMatchSnapshot();
  });
});
