// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/enum/backed-invalid.phpt
  it("Invalid enum backing type", function () {
    expect(parser.parseCode("<?php\nenum Foo: Bar {}\n?>")).toMatchSnapshot();
  });
});
