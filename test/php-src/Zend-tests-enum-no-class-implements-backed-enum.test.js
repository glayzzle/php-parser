// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-class-implements-backed-enum.phpt
  it("Class cannot implement BackedEnum", function () {
    expect(parser.parseCode("<?php\nclass Foo implements BackedEnum {}\n?>")).toMatchSnapshot();
  });
});
