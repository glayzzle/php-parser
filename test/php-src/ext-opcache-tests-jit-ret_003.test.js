// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/ret_003.phpt
  it("JIT RET: 003", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n  $c = \"hello\";\n  return $c;\n}\nvar_dump(foo());\n?>")).toMatchSnapshot();
  });
});
