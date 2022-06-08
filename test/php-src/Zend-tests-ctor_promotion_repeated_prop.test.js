// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ctor_promotion_repeated_prop.phpt
  it("Clash between promoted and explicit property", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $prop;\n    public function __construct(public $prop) {}\n}\n?>")).toMatchSnapshot();
  });
});
