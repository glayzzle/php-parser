// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/reg_alloc_005.phpt
  it("Register Alloction 005: Incorrect double/long register hinting", function () {
    expect(parser.parseCode("<?php\nfunction test() {\n\t$j = 0;\n    for ($i = 1; $i < 10; $i++) {\n        $i = 0.0;\n        $j++;\n        if ($j > 10) break;\n    }\n}\ntest();\n?>\nDONE")).toMatchSnapshot();
  });
});
