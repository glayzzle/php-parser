// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/cmp_006.phpt
  it("JIT CMP: 006 Undefined variable checks", function () {
    expect(parser.parseCode("<?php\nfunction test1($c) {\n    if ($c) {\n        $x = 1;\n    }\n    var_dump($x == 1);\n}\nfunction test2($c) {\n    if ($c) {\n        $x = 1.0;\n    }\n    var_dump($x == 1.0);\n}\nfunction test3($c) {\n    if (!$c) {\n        $x = 1;\n    }\n    if ($c) {\n        $y = 1;\n    }\n    var_dump($x == $y);\n}\nfunction test4($c) {\n    if (!$c) {\n        $x = 1.0;\n    }\n    if ($c) {\n        $y = 1.0;\n    }\n    var_dump($x == $y);\n}\ntest1(false);\ntest2(false);\ntest3(false);\ntest4(false);\n?>")).toMatchSnapshot();
  });
});
