// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_012.phpt
  it("JIT INC: 012", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $x = 1.0;\n    ++$x; // reg -> reg\n    return $x;\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
