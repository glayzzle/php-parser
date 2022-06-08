// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/ret_002.phpt
  it("JIT RET: 002", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n  $c = 1.0;\n  return $c;\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
