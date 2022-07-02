// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ctor_promotion_free_function.phpt
  it("Constructor promotion cannot be used in a free function", function () {
    expect(parser.parseCode("<?php\nfunction __construct(public $prop) {}\n?>")).toMatchSnapshot();
  });
});
