// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_011.phpt
  it("JIT ASSIGN: 011", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = 1;\n    $c = 2;\n    $d = 3;\n    if ($a) {\n        $b = array();\n    } else {\n        $b =& $c;\n    }\n    $b = $d;\n    var_dump($b, $c);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
