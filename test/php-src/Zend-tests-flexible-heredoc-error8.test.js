// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-heredoc-error8.phpt
  it("Flexible heredoc syntax error 8: don't interpret \\t as indentation", function () {
    expect(() => parser.parseCode("<?php\n<<<end\n\\ta\n\tend);\n?>")).toThrowErrorMatchingSnapshot();
  });
});
