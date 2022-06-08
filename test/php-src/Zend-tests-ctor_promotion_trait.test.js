// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ctor_promotion_trait.phpt
  it("Constructor promotion can be used inside a trait", function () {
    expect(parser.parseCode("<?php\ntrait Test {\n    public function __construct(public $prop) {}\n}\nclass Test2 {\n    use Test;\n}\nvar_dump(new Test2(42));\n?>")).toMatchSnapshot();
  });
});
