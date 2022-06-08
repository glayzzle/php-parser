// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_016.phpt
  it("JIT INC: 016", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $x = 1.0;\n    return ++$x; // reg -> reg, reg\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
