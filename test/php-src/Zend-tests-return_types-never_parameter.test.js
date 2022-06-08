// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/return_types/never_parameter.phpt
  it("never return type: not valid as a parameter type", function () {
    expect(parser.parseCode("<?php\nfunction foobar(never $a) {}\n?>")).toMatchSnapshot();
  });
});
