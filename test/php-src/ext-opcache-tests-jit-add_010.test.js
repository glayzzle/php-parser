// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/add_010.phpt
  it("JIT ADD: 010 overflow handling", function () {
    expect(parser.parseCode("<?php\nfunction foo($a) {\n    var_dump($a+$a=$a+$a=$a+$a=$a);\n}\nfoo(PHP_INT_MAX);\n?>")).toMatchSnapshot();
  });
});
