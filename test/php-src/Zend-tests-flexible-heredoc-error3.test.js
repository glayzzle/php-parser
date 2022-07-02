// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-heredoc-error3.phpt
  it("Flexible heredoc syntax error 3: mixing spaces and tabs in ending marker", function () {
    expect(() => parser.parseCode("<?php\necho <<<END\n\t\t a\n\t\t b\n\t\t c\n\t\t END;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
