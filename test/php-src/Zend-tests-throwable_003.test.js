// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/throwable_003.phpt
  it("Test user code implementing Throwable results in fatal error", function () {
    expect(parser.parseCode("<?php\nclass Failure implements Throwable {}\n?>")).toMatchSnapshot();
  });
});
