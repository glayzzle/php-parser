// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jmp_elim_004.phpt
  it("Incorrect empty basic block elimination", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    $foo = \"test\";\n    var_dump($foo ?? \"default\");\n    $null = null;\n    var_dump($null ?? 3);\n    var_dump($null ?? new stdClass);\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
