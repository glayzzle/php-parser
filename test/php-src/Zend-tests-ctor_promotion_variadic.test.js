// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ctor_promotion_variadic.phpt
  it("Cannot use constructor promotion with variadic parameter", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __construct(public string ...$strings) {}\n}\n?>")).toMatchSnapshot();
  });
});
