// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ctor_promotion_not_a_ctor.phpt
  it("Constructor promotion can only be used in constructors ... duh", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public function foobar(public int $x, public int $y) {}\n}\n?>")).toMatchSnapshot();
  });
});
