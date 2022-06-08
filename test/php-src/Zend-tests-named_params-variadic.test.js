// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/named_params/variadic.phpt
  it("Additional named params are collect into variadics", function () {
    expect(parser.parseCode("<?php\nfunction test($a, string ...$extra) {\n    var_dump($a);\n    var_dump($extra);\n    // Extra named parameters do not contribute toward func_num_args() and func_get_args().\n    var_dump(func_num_args());\n    var_dump(func_get_args());\n}\nfunction test2(&...$refs) {\n    foreach ($refs as &$ref) $ref++;\n}\ntest(b: 'b', a: 'a', c: 'c', extra: 'extra');\necho \"\\n\";\ntest('a', 'b', 'c', d: 'd');\necho \"\\n\";\n$x = 0;\n$y = 0;\ntest2(x: $x, y: $y);\nvar_dump($x, $y);\n?>")).toMatchSnapshot();
  });
});
