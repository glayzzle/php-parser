// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/bw_not_002.phpt
  it("JIT BW_NOT: 002 Exception handling", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n\t$j = 0;\n    for ($i = 0; $i < 10; $i++) {\n        $a = ~$j - $a = $j + $j = !$j = $j++;\n    }\n}\ntest();\n?>")).toMatchSnapshot();
  });
});
