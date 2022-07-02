// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/bug76439_2.phpt
  it("Bug #76439: Don't always strip leading whitespace from heredoc T_ENCAPSED_AND_WHITESPACE tokens (error case)", function () {
    expect(() => parser.parseCode("<?php\n$foo = 1;\nvar_dump(<<<BAR\n $foo\n$foo\n BAR);\n?>")).toThrowErrorMatchingSnapshot();
  });
});
