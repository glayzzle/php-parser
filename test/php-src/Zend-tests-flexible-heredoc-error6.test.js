// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-heredoc-error6.phpt
  it("Flexible heredoc syntax error 6: no ending token on 0 length body", function () {
    expect(() => parser.parseCode("<?php\necho <<<END")).toThrowErrorMatchingSnapshot();
  });
});
