// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_002.phpt
  it("JIT ASSIGN: 002", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $ref1 = 2.3;\n    $ref2 =& $ref1;\n    $a = array();\n    $b = $a;\n    $c = $a;\n    $a = $ref1;\n    $x = $a;\n    var_dump($x, $b, $c);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
