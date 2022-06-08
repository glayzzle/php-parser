// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_010.phpt
  it("JIT INC: 010", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $x = 1.0;\n    ++$x; // reg -> mem\n    var_dump($x);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
