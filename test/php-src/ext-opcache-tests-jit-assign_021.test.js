// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_021.phpt
  it("JIT ASSIGN: 021", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = array();\n    $b = $a;\n    $c = 1;\n    $d = $a = $c;\n    var_dump($b, $d);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
