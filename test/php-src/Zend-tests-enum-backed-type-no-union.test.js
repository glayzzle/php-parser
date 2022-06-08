// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-type-no-union.phpt
  it("Backed enums type can't be union", function () {
    expect(parser.parseCode("<?php\nenum Foo: int|string {}\n?>")).toMatchSnapshot();
  });
});
