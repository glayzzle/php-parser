// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/bug45312.phpt
  it("Bug #45312 (Segmentation fault on second request for array functions)", function () {
    expect(parser.parseCode("<?php\nclass cr {\n    private $priv_member;\n    function __construct($val) {\n        $this->priv_member = $val;\n    }\n    static function comp_func_cr($a, $b) {\n        if ($a->priv_member === $b->priv_member) return 0;\n        return ($a->priv_member > $b->priv_member) ? 1 : -1;\n    }\n    static function comp_func_cr2($a, $b) {\n        echo \".\";\n        if ($a->priv_member === $b->priv_member) return 0;\n        return ($a->priv_member < $b->priv_member) ? 1 : -1;\n    }\n    function dump() {\n        echo $this->priv_member . \"\\n\";\n    }\n}\n$a = array(\"0.1\" => new cr(9), \"0.5\" => new cr(12), 0 => new cr(23), 1 => new cr(4), 2 => new cr(-15),);\n$b = array(\"0.2\" => new cr(9), \"0.5\" => new cr(22), 0 => new cr(3), 1 => new cr(4), 2 => new cr(-15),);\n$result = array_udiff_assoc($a, $b, array(\"cr\", \"comp_func_cr\"));\nforeach($result as $val) {\n    $val->dump();\n}\n$result = array_udiff_assoc($a, $b, array(\"cr\", \"comp_func_cr2\"));\nforeach($result as $val) {\n    $val->dump();\n}\n?>")).toMatchSnapshot();
  });
});
