// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ctor_promotion_abstract.phpt
  it("Constructor promotion cannot be used inside an abstract constructor", function () {
    expect(parser.parseCode("<?php\nabstract class Test {\n    abstract public function __construct(public int $x);\n}\n?>")).toMatchSnapshot();
  });
});
