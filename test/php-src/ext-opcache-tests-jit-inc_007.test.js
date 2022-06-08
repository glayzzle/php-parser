// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_007.phpt
  it("JIT INC: 007", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $x = 1;\n    $x += 0;\n    return ++$x; // mem -> reg, reg\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
