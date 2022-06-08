// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug71806.phpt
  it("Bug #71806 (php_strip_whitespace() fails on some numerical values)", function () {
    expect(parser.parseCode("<?php\necho php_strip_whitespace(__DIR__ . '/bug71806.data');\n?>")).toMatchSnapshot();
  });
});
