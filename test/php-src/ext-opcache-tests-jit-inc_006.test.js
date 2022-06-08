// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_006.phpt
  it("JIT INC: 006", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $x = 1;\n    var_dump(++$x); // reg -> mem, mem\n    var_dump($x);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
