// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_005.phpt
  it("JIT INC: 005", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $x = 1;\n    $x += 0;\n    var_dump(++$x); // mem -> mem, mem\n    var_dump($x);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
