// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ctor_promotion_callable_type.phpt
  it("Type of promoted property may not be callable", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function __construct(public callable $callable) {}\n}\n?>")).toMatchSnapshot();
  });
});
