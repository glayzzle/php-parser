// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-nowdoc-error8.phpt
  it("Flexible nowdoc syntax error 8: no ending token with explicit trailing space", function () {
    expect(() => parser.parseCode("<?php\neval('<<<\\'end\\'\n  ');\n?>")).toThrowErrorMatchingSnapshot();
  });
});
