// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/pcre/tests/errors05.phpt
  it("Test preg_match() function : error conditions - jit stacklimit exhausted", function () {
    expect(parser.parseCode("<?php\nvar_dump(preg_match('/^(foo)+$/', str_repeat('foo', 1024*8192)));\nvar_dump(preg_last_error_msg() === 'JIT stack limit exhausted');\n?>")).toMatchSnapshot();
  });
});
