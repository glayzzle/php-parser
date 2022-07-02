// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-class-implements-unit-enum.phpt
  it("Class cannot implement UnitEnum", function () {
    expect(parser.parseCode("<?php\nclass Foo implements UnitEnum {}\n?>")).toMatchSnapshot();
  });
});
