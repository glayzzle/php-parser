// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-heredoc-error11.phpt
  it("Flexible heredoc syntax error 11: show erroneous line in error message (variable interpolation)", function () {
    expect(() => parser.parseCode("<?php\necho <<<END\n a\n$a\n END;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
