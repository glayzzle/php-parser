// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // Zend/tests/zend_signed_multiply-64bit-2.phpt
  it("Zend signed multiply 64-bit, variation 2", function () {
    expect(parser.parseCode("<?php\nfor($c = -16; $c < 0; $c++) {\n        var_dump($c, intdiv(PHP_INT_MIN, 10), intdiv(PHP_INT_MIN, 10) * $c);\n    echo \"-----------\\n\";\n}\nfor($c = 0; $c <= 16; $c++) {\n        var_dump($c, intdiv(PHP_INT_MAX, 10), intdiv(PHP_INT_MAX, 10) * $c);\n    echo \"-----------\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
