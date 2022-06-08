// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/bug63874.phpt
  it("Bug #63874 (Segfault if php_strip_whitespace has heredoc)", function () {
    expect(parser.parseCode("<?php\necho php_strip_whitespace(__FILE__);\nreturn <<<A\na\nA;\n?>")).toMatchSnapshot();
  });
});
