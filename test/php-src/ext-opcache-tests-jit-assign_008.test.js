// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_008.phpt
  it("JIT ASSIGN: 008", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = 1.0;\n    $c = 2.0;\n    $c = $a;\n    var_dump($a);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
