// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/no-non-backed-enum-implements-backed-enum.phpt
  it("Non-backed enum cannot implement BackedEnum", function () {
    expect(parser.parseCode("<?php\nenum Foo implements BackedEnum {}\n?>")).toMatchSnapshot();
  });
});
