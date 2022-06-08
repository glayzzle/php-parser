// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-nowdoc-error6.phpt
  it("Flexible nowdoc syntax error 6: no ending token on 0 length body", function () {
    expect(() => parser.parseCode("<?php\necho <<<'END'")).toThrowErrorMatchingSnapshot();
  });
});
