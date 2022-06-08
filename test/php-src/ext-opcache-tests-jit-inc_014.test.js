// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/inc_014.phpt
  it("JIT INC: 014", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $x = 1.0;\n    var_dump(++$x); // reg -> mem, mem\n    var_dump($x);\n}\nfoo();\n?>")).toMatchSnapshot();
  });
});
