// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/mul_008.phpt
  it("JIT MUL: 008 incorrect elimination of type store", function () {
    expect(parser.parseCode("<?php\nfunction foo(int $a){\n    $a=$a%10;\n    $a=$f=$a*(6158978401740);\n    $a=$f=$a*(261740);\n    $a%0;\n}\nfoo(3);\n?>")).toMatchSnapshot();
  });
});
