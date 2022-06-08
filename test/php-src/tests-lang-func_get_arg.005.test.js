// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // tests/lang/func_get_arg.005.phpt
  it("A variable, which is referenced by another variable, is passed by value.\nDuring the call, the original variable is updated. This should not affect func_get_arg().", function () {
    expect(parser.parseCode("<?php\nfunction refVal($x) {\n    global $a;\n    $a = 'changed.a';\n    var_dump($x);\n    var_dump(func_get_arg(0));\n}\n$a = \"original.a\";\n$ref =& $a;\nrefVal($a);\n?>")).toMatchSnapshot();
  });
});
