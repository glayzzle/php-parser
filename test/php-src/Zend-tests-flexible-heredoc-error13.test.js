// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-heredoc-error13.phpt
  it("Flexible heredoc syntax error 12: show erroneous line in error message (lacking indentation)", function () {
    expect(() => parser.parseCode("<?php\necho <<<END\n a\nb\n END;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
