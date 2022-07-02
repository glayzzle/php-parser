// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/get_class_vars_007.phpt
  it("get_class_vars(): Testing with static properties", function () {
    expect(parser.parseCode("<?php\nclass A {\n    static public $a, $aa;\n    static private $b, $bb;\n    static protected $c, $cc;\n    static public function test() {\n        var_dump(get_class_vars(__CLASS__));\n    }\n}\nvar_dump(get_class_vars('A'));\nvar_dump(A::test());\n?>")).toMatchSnapshot();
  });
});
