// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/get_class_vars_004.phpt
  it("get_class_vars(): Testing the scope", function () {
    expect(parser.parseCode("<?php\nclass A {\n    public $a = 1;\n    static public $A = 2;\n    private $b = 3;\n    static private $B = 4;\n    protected $c = 5;\n    static protected $C = 6;\n    public function __construct() {\n        var_dump(get_class_vars('A'));\n    }\n    static public function test() {\n        var_dump(get_class_vars('A'));\n    }\n}\nvar_dump(get_class_vars('A'));\nnew A;\nvar_dump(A::test());\n?>")).toMatchSnapshot();
  });
});
