// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/mod_005.phpt
  it("JIT MOD: 005", function () {
    expect(parser.parseCode("<?php\nclass Test{\n    public $prop = 32;\n}\nfunction test2($test) {\n    $test->prop %= 3;\n\treturn $test;\n}\nvar_dump(test2(new Test));\n?>")).toMatchSnapshot();
  });
});
