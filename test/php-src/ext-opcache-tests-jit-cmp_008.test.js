// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/cmp_008.phpt
  it("JIT CMP: 008 Wrong range inference for comparison between IS_LONG and IS_FALSE/IS_TRUE", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    for ($i = 0; $i < 10; $i %= -4 != -4 < ($a = $a + $a)) {\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
