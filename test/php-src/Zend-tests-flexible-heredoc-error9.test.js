// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-heredoc-error9.phpt
  it("Flexible heredoc syntax error 9: unindented variable interpolation", function () {
    expect(() => parser.parseCode("<?php\n$var = 'Bar';\nvar_dump(<<<TEST\n  Foo\n$var\n  TEST);\n?>")).toThrowErrorMatchingSnapshot();
  });
});
