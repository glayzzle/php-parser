// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-enum-implements-backed-enum.phpt
  it("Enum cannot manually implement BackedEnum", function () {
    expect(parser.parseCode("<?php\nenum Foo: int implements BackedEnum {}\n?>")).toMatchSnapshot();
  });
});
