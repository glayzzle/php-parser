// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/reg_alloc_008.phpt
  it("Register Alloction 008: Incorrect deoptimization code", function () {
    expect(parser.parseCode("<?php\nfunction foo($a) {\n    for($i=0; $i<1; $i++)\n          $a=$y / $a = $a + $a != ($a);\n}\nfoo(7);\n?>")).toMatchSnapshot();
  });
});
