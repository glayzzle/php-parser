// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_019.phpt
  it("JIT ASSIGN: 019", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $c = array();\n    $d =& $c;\n    $a = 1;\n    $b = 2;\n    $c = $a = $b;\n    var_dump($c, $d);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
