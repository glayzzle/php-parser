// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/constants/PHP_INT_64bit.phpt
  it("Test PHP_INT_MIN, PHP_INT_MAX and PHP_INT_SIZE (64-bit)", function () {
    expect(parser.parseCode("<?php\nvar_dump(PHP_INT_MIN);\nvar_dump(PHP_INT_MAX);\nvar_dump(PHP_INT_SIZE);\n?>")).toMatchSnapshot();
  });
});
