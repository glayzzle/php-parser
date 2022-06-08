// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_007.phpt
  it("JIT ASSIGN: 007", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = 1.0;\n    $c = 2.0;\n    $a = 1;\n    var_dump($a);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
