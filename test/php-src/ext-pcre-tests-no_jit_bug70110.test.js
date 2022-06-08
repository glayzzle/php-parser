// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/no_jit_bug70110.phpt
  it("Test (*NO_JIT) doesn't crash when JIT enabled", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match('/(*NO_JIT)^(A{1,2}B)+$$/',str_repeat('AB',8192)));\nvar_dump(preg_match('~(*NO_JIT)(a)*~', str_repeat('a', 5431), $match))\n?>")).toMatchSnapshot();
  });
});
