// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_002.phpt
  it("JIT INC: 002", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $x = 1;\n    ++$x; // reg -> mem\n    var_dump($x);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
