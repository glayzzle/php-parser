// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-nowdoc-error4.phpt
  it("Flexible nowdoc syntax error 4: not enough body indentation", function () {
    expect(() => parser.parseCode("<?php\necho <<<'END'\n      a\n     b\n    c\n     END;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
