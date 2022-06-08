// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/icall_001.phpt
  it("JIT ICALL: 001", function () {
    expect(parser.parseCode("<?php\nvar_dump(true, 0, 42, -42, 0.0, 2.0,\"hello\", array());\n?>")).toMatchSnapshot();
  });
});
