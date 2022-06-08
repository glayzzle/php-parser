// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_017.phpt
  it("JIT ASSIGN: 017", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = array();\n    $b = 2;\n    $c = $a = $b;\n    return $c;\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
