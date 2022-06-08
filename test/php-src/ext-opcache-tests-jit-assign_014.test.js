// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_014.phpt
  it("JIT ASSIGN: 014", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = 1;\n    $b = array();\n    $c = $a = $b;\n    var_dump($c);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
