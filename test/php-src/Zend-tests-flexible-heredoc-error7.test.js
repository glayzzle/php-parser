// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-heredoc-error7.phpt
  it("Flexible heredoc syntax error 7: no ending token", function () {
    expect(() => parser.parseCode("<?php\necho <<<END")).toThrowErrorMatchingSnapshot();
  });
});
