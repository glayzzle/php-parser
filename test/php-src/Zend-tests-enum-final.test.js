// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/final.phpt
  it("Enum is final", function () {
    expect(parser.parseCode("<?php\nenum Foo {}\nclass Bar extends Foo {}\n?>")).toMatchSnapshot();
  });
});
