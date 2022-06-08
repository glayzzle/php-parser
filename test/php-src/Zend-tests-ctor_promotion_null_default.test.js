// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ctor_promotion_null_default.phpt
  it("Constructor promotion with null default, requires an explicitly nullable type", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __construct(public int $x = null) {}\n}\n?>")).toMatchSnapshot();
  });
});
