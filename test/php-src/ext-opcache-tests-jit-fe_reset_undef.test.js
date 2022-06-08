// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/fe_reset_undef.phpt
  it("FE_RESET with potentially undef operand", function () {
    expect(parser.parseCode("<?php\nfunction test($c) {\n    if ($c) {\n        $a[] = null;\n    }\n    foreach ($a as $k) {}\n}\ntest(false);\n?>")).toMatchSnapshot();
  });
});
