// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ctor_promotion_defaults.phpt
  it("Constructor promotion with default values", function () {
    expect(parser.parseCode("<?php\nclass Point {\n    public function __construct(\n        public float $x = 0.0,\n        public float $y = 1.0,\n        public float $z = 2.0\n    ) {}\n}\nvar_dump(new Point(10.0));\nvar_dump(new Point(10.0, 11.0));\nvar_dump(new Point(10.0, 11.0, 12.0));\n?>")).toMatchSnapshot();
  });
});
