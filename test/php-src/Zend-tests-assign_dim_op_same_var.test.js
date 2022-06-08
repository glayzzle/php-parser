// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/assign_dim_op_same_var.phpt
  it("Compound array assignment with same variable", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $ary = [[]];\n    $ary[0] += $ary;\n    foreach ($ary as $v) {\n        var_dump($v);\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
