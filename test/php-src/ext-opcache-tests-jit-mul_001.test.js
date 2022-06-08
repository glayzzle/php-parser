// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/mul_001.phpt
  it("JIT MUL: 001 integer multiplay", function () {
    expect(parser.parseCode("<?php\nfunction mul2(int $a) {\n  $res = $a * 2;\n  var_dump($res);\n}\nfunction mul4(int $a) {\n  $res = $a * 4;\n  var_dump($res);\n}\nfunction mul111(int $a) {\n  $res = $a * 111;\n  var_dump($res);\n}\nmul2(3);\nmul4(3);\nmul111(3);\n?>")).toMatchSnapshot();
  });
});
