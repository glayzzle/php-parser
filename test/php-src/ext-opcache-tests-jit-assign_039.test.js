// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_039.phpt
  it("JIT ASSIGN: Assign reference IS_VAR", function () {
    expect(parser.parseCode("<?php\n$a = $ref =& $val;\nvar_dump($a);\n?>")).toMatchSnapshot();
  });
});
