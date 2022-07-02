// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ctor_promotion_interface.phpt
  it("Constructor promotion cannot be used inside an abstract constructor (interface variant)", function () {
    expect(parser.parseCode("<?php\ninterface Test {\n    public function __construct(public int $x);\n}\n?>")).toMatchSnapshot();
  });
});
