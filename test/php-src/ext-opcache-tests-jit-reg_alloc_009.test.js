// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/reg_alloc_009.phpt
  it("Register Alloction 009: Missing type store", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n    for(;; $a + $y[4][] = $y < $a + $a = $b = $a = + $y[] = 0.1) {\n        4 >> - $j++;\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
