// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/assign_045.phpt
  it("JIT ASSIGN: incorrect assumption about in-memeory zval type", function () {
    expect(parser.parseCode("<?php\nfunction test($x, $y) {\n    $a = $b = $a = $y;\n    var_dump($a + $x);\n}\ntest(null, 1);\n?>")).toMatchSnapshot();
  });
});
