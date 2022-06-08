// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/reg_alloc_014.phpt
  it("Register Alloction 014: Register clobbering", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    for($cnt = 0; $cnt < 6; $cnt++) {\n        $e = $a-- + $a-- + $a *= $a;\n        for ($i = 0; $i <= .1; $i++);\n    }\n}\nfoo();\n?>\nDONE")).toMatchSnapshot();
  });
});
