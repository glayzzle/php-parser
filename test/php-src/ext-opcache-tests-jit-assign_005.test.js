// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_005.phpt
  it("JIT ASSIGN: 005", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $a = array();\n    $b = $a;\n    $c = array();\n    $d = $c;\n    $a = 1;\n    $c = $a;\n    return $c;\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
