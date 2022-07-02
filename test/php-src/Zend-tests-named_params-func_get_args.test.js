// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/func_get_args.phpt
  it("Behavior of func_get_args() and friends with named parameters", function () {
    expect(parser.parseCode("<?php\nfunction test($a, $b = 'b', $c = 'c') {\n    var_dump(func_num_args());\n    var_dump(func_get_args());\n    var_dump(func_get_arg(0));\n    var_dump(func_get_arg(1));\n    var_dump(func_get_arg(2));\n}\ntest(c: 'C', a: 'A');\n?>")).toMatchSnapshot();
  });
});
