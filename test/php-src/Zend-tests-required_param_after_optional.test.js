// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/required_param_after_optional.phpt
  it("Required parameter after optional is deprecated", function () {
    expect(parser.parseCode("<?php\nfunction test($testA = null, $testB = null, $testC) {}\nfunction test2(Type $test2A = null, $test2B = null, $test2C) {}\nfunction test3(Type $test3A = null, ?Type2 $test3B = null, $test3C) {}\n?>")).toMatchSnapshot();
  });
});
