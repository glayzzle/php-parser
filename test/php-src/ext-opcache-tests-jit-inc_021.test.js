// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_021.phpt
  it("JIT INC: 021", function () {
    expect(parser.parseCode("<?php\nfunction inc(int|float $x) {\n    return ++$x;\n}\nfunction dec(int|float $x) {\n    return --$x;\n}\nvar_dump(inc(PHP_INT_MAX));\nvar_dump(inc(1.1));\nvar_dump(dec(PHP_INT_MIN));\nvar_dump(dec(1.1));\n?>")).toMatchSnapshot();
  });
});
