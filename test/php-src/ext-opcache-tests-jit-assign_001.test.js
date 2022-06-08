// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_001.phpt
  it("JIT ASSIGN: 001", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = array();\n    $b = $a;\n    $c = $a;\n    $a = 1;\n    $x = $a;\n    var_dump($x, $b, $c);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
