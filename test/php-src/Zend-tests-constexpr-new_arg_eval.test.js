// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/constexpr/new_arg_eval.phpt
  it("Check that const exprs are pre-evaluated in new arguments", function () {
    expect(parser.parseCode("<?php\nclass C {\n    public function __construct(public $x) {}\n}\nfunction test(\n    $a = new C(__CLASS__),\n    $b = new C(__FUNCTION__),\n    $c = new C(x: __FILE__),\n) {\n    var_dump($a, $b, $c);\n}\ntest();\n// Check that nested new works as well.\nfunction test2($p = new C(new C(__FUNCTION__))) {\n    var_dump($p);\n}\ntest2();\n?>")).toMatchSnapshot();
  });
});
