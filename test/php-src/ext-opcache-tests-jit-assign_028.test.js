// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_028.phpt
  it("JIT ASSIGN: 028", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n  var_dump($i=1);\n  return $i;\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
