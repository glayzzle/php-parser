// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_015.phpt
  it("JIT ASSIGN: 015", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = 1;\n    $b = 2;\n    $c = $a = $b;\n    var_dump($c);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
