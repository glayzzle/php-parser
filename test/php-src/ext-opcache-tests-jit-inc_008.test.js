// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_008.phpt
  it("JIT INC: 008", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $x = 1;\n    return ++$x; // reg -> reg, reg\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
