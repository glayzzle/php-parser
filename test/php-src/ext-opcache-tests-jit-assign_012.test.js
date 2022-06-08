// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_012.phpt
  it("JIT ASSIGN: 012", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = 0;\n    $c = 2;\n    $d = 3;\n    if ($a) {\n        $b = array();\n    } else {\n        $b =& $c;\n    }\n    $b = $d;\n    var_dump($b, $c);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
