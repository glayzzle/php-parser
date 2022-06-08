// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_029.phpt
  it("JIT ASSIGN: 029", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n  $i = 1;\n  var_dump($i=2);\n  return $i;\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
