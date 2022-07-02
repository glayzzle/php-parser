// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/flexible-nowdoc-error1.phpt
  it("Flexible nowdoc syntax 1: different indentation for body (spaces) ending marker (tabs)", function () {
    expect(() => parser.parseCode("<?php\necho <<<'END'\n\t   a\n\t  b\n\t c\n\t\tEND;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
