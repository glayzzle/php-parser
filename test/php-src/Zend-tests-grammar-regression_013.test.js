// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/grammar/regression_013.phpt
  it("Testing for regression with encapsed variables in class declaration context", function () {
    expect(parser.parseCode("<?php\nclass A { function foo() { \"{${$a}}\"; } function list() {} }\necho \"Done\", PHP_EOL;\n?>")).toMatchSnapshot();
  });
});
