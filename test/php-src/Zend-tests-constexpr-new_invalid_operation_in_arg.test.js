// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constexpr/new_invalid_operation_in_arg.phpt
  it("Invalid operation in new arg in const expr", function () {
    expect(parser.parseCode("<?php\nstatic $x = new stdClass($foo);\n?>")).toMatchSnapshot();
  });
});
