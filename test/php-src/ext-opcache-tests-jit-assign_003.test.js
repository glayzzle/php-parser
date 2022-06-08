// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_003.phpt
  it("JIT ASSIGN: 003", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = array();  // [rc1, array]\n    $a = 1;        // [rc1, long, reg]\n    $x = $a;\n    var_dump($x);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
