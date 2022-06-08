// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/reg_alloc_006.phpt
  it("Register Alloction 006: Incorrect type store elimination", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n\t$a = 0;\n    for($i=0; $i < 6; $i++) {\n        $y - $b = $a ? $b : $y;\n        $a = $b = 7;\n     }\n}\nfoo()\n?>\nDONE")).toMatchSnapshot();
  });
});
