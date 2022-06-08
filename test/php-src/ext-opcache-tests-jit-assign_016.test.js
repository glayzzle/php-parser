// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_016.phpt
  it("JIT ASSIGN: 016", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = 1;\n    $b = 2;\n    $c = $a = $b;\n    return $c;\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
