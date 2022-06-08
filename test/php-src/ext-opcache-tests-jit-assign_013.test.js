// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_013.phpt
  it("JIT ASSIGN: 013", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = array();\n    $b = 2;\n    $c = $a = $b;\n    var_dump($c);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
