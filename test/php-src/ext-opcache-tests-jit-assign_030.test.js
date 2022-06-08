// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_030.phpt
  it("JIT ASSIGN: 030", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n  $i = 1;\n  $x = 2;\n  var_dump($i=$x);\n  return $i;\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
