// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ignore_repeated_source.phpt
  it("Test ignore_repeated_source ini setting", function () {
    expect(parser.parseCode("<?php\n// Not a repeated error due to different variables names.\n$u1 + $u2;\n// Repeated error.\n$u + $u;\n// Also a repeated error, because we're ignoring the different source.\n$u + 1;\n?>")).toMatchSnapshot();
  });
});
