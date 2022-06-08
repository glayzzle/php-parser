// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/first_class_callable_assert3.phpt
  it("new class(...)  in assert", function () {
    expect(parser.parseCode("<?php\nassert(new class(...) {});\n?>")).toMatchSnapshot();
  });
});
