// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/substr_int_min.phpt
  it("substr() with PHP_INT_MIN offset or length", function () {
    expect(parser.parseCode("<?php\nvar_dump(substr('x', PHP_INT_MIN));\nvar_dump(substr('x', 0, PHP_INT_MIN));\n?>")).toMatchSnapshot();
  });
});
