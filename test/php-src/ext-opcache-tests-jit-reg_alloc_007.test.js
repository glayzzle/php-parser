// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/reg_alloc_007.phpt
  it("Register Alloction 007: Missing store", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    for ($i = 0; $i < 100; $i++) {\n        $a = $a + $a = $a + !$a = $a;\n        $aZ = $a;\n        @$aZ %= $a;\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
