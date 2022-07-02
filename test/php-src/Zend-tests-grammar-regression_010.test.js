// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grammar/regression_010.phpt
  it("Test to check regressions on T_IMPLEMENTS followed by a T_NS_SEPARATOR", function () {
    expect(() => parser.parseCode("<?php\ninterface A{}\n// No longer considered legal in PHP 8.\nclass B implements\\A {}\necho \"Done\", PHP_EOL;\n?>")).toThrowErrorMatchingSnapshot();
  });
});
