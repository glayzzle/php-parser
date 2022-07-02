// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/assert/assert_return_value.phpt
  it("assert() returns boolean on success or failure", function () {
    expect(parser.parseCode("<?php\nvar_dump(assert(true));\nvar_dump(assert(false));\n?>")).toMatchSnapshot();
  });
});
