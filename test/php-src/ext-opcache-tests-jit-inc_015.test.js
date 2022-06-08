// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_015.phpt
  it("JIT INC: 015", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $x = 1.0;\n    $x += 0;\n    return ++$x; // mem -> reg, reg\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
