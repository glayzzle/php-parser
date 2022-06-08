// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-heredoc-error12.phpt
  it("Flexible heredoc syntax error 12: show erroneous line in error message (mixed indentation)", function () {
    expect(() => parser.parseCode("<?php\necho <<<END\n a\n\tb\n END;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
