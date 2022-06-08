// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/array/array_udiff_assoc_basic.phpt
  it("array_udiff_assoc(): Test return type and value for expected input", function () {
    expect(parser.parseCode("<?php\n/*\n* Function is implemented in ext/standard/array.c\n*/\nclass cr {\n    private $priv_member;\n    function __construct($val) {\n        $this->priv_member = $val;\n    }\n    static function comp_func_cr($a, $b) {\n        if ($a->priv_member === $b->priv_member) return 0;\n        return ($a->priv_member > $b->priv_member) ? 1 : -1;\n    }\n}\n$a = array(\"0.1\" => new cr(9), \"0.5\" => new cr(12), 0 => new cr(23), 1 => new cr(4), 2 => new cr(-15),);\n$b = array(\"0.2\" => new cr(9), \"0.5\" => new cr(22), 0 => new cr(3), 1 => new cr(4), 2 => new cr(-15),);\n$result = array_udiff_assoc($a, $b, array(\"cr\", \"comp_func_cr\"));\nvar_dump($result);\n?>")).toMatchSnapshot();
  });
});
