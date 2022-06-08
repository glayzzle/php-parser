// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/mod_003.phpt
  it("JIT MOD: 003", function () {
    expect(parser.parseCode("<?php\nclass Test {\n    public $prop = 0;\n}\nfunction test1($test) {\n    $test[0] %= 3;\n    return $test;\n}\nfunction test2($test) {\n    $test->prop %= 3;\n    return $test;\n}\nvar_dump(test1([0]));\nvar_dump(test2(new Test));\n?>")).toMatchSnapshot();
  });
});
