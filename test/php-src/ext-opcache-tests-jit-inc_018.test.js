// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_018.phpt
  it("JIT INC: 018", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $x = false;\n    return ++$x; // reg -> reg, reg\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
