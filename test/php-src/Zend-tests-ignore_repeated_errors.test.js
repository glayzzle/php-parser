// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ignore_repeated_errors.phpt
  it("Test ignore_repeated_errors ini setting", function () {
    expect(parser.parseCode("<?php\n// Not a repeated error due to different variables names.\n$u1 + $u2;\n// Repeated error.\n$u + $u;\n// Not a repeated error, because the line is different.\n$u + 1;\n?>")).toMatchSnapshot();
  });
});
