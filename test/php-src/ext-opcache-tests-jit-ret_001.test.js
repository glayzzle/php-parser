// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/ret_001.phpt
  it("JIT RET: 001", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n  $c = 1;\n  return $c;\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
