// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/custom_assert_forbidden.phpt
  it("Defining a free-standing assert() function is deprecated", function () {
    expect(parser.parseCode("<?php\nnamespace FooBar;\nfunction assert() {}\n?>")).toMatchSnapshot();
  });
});
