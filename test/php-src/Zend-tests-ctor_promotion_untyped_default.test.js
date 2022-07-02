// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/ctor_promotion_untyped_default.phpt
  it("Bug #79867: Promoted untyped properties should get null default value", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public function __construct(\n        public $untyped = 1,\n        public int $typed = 2,\n    ) {}\n}\nclass B extends A {\n    public function __construct() {\n        // Missing parent::__construct() call,\n        // properties will not be initialized.\n    }\n}\nvar_dump(new B);\n?>")).toMatchSnapshot();
  });
});
