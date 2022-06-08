// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_034.phpt
  it("JIT ASSIGN: 034", function () {
    expect(parser.parseCode("<?php\nfunction bar() {\n    $a = strlen(\"a\");\n    $a++;\n    return $a;\n}\nvar_dump(bar());\n?>")).toMatchSnapshot();
  });
});
