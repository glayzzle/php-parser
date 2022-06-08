// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_003.phpt
  it("JIT INC: 003", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $x = 1;\n    $x += 0;\n    ++$x; // mem -> reg\n    return $x;\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
