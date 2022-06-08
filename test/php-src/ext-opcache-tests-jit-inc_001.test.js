// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_001.phpt
  it("JIT INC: 001", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $x = 1;\n    $x += 0;\n    ++$x; // mem -> mem\n    var_dump($x);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
