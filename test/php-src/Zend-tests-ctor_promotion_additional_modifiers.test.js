// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ctor_promotion_additional_modifiers.phpt
  it("Constructor promotion only permits visibility modifiers", function () {
    expect(() => parser.parseCode("<?php\nclass Test {\n    public function __construct(public static $x) {}\n}\n?>")).toThrowErrorMatchingSnapshot();
  });
});
