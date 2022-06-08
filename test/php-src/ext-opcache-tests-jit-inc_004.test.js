// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_004.phpt
  it("JIT INC: 004", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $x = 1;\n    ++$x; // reg -> reg\n    return $x;\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
