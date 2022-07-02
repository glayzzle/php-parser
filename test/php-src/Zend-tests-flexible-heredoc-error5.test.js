// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-heredoc-error5.phpt
  it("Flexible heredoc syntax error 5: mixing spaces and tabs in ending marker for 0 length body", function () {
    expect(() => parser.parseCode("<?php\necho <<<END\n\t END;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
