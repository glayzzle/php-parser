// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/rope_001.phpt
  it("JIT ROPE: 001 *_ROPE may types of temporary variables", function () {
    expect(parser.parseCode("<?php\n$a = \"\";\n$b = 1;\nvar_dump(\" $a $a\" == \" $a\" . -$b);\nvar_dump(\" $a $a\" == \" $a\" . -$b);\n?>")).toMatchSnapshot();
  });
});
