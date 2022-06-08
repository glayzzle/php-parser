// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grammar/regression_012.phpt
  it("Testing for regression on const list syntax and arrays", function () {
    expect(() => parser.parseCode("<?php\nclass A {\n    const A = [1, FOREACH];\n}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
