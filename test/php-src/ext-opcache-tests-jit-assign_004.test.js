// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_004.phpt
  it("JIT ASSIGN: 004", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = null;\n    $b = $a;\n    $c = null;\n    $d = $c;\n    $a = 1;\n    $c = $a;\n    return $c;\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
