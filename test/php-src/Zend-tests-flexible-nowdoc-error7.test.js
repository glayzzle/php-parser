// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-nowdoc-error7.phpt
  it("Flexible nowdoc syntax error 7: no ending token", function () {
    expect(() => parser.parseCode("<?php\necho <<<'END'")).toThrowErrorMatchingSnapshot();
  });
});
