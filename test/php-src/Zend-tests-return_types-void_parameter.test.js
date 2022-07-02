// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/void_parameter.phpt
  it("void return type: not valid as a parameter type", function () {
    expect(parser.parseCode("<?php\nfunction foobar(void $a) {}\n?>")).toMatchSnapshot();
  });
});
