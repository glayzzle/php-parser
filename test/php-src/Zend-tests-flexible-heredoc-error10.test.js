// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-heredoc-error10.phpt
  it("Flexible heredoc syntax error 10: unindented variable interpolation (as first value)", function () {
    expect(() => parser.parseCode("<?php\n$var = 'Bar';\nvar_dump(<<<TEST\n$var\n TEST);\n?>")).toThrowErrorMatchingSnapshot();
  });
});
