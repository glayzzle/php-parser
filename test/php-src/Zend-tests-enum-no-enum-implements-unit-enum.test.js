// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-enum-implements-unit-enum.phpt
  it("Enum cannot manually implement UnitEnum", function () {
    expect(parser.parseCode("<?php\nenum Foo implements UnitEnum {}\n?>")).toMatchSnapshot();
  });
});
