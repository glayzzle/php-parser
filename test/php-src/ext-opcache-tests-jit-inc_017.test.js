// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_017.phpt
  it("JIT INC: 017", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $x = true;\n    return ++$x; // reg -> reg, reg\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
