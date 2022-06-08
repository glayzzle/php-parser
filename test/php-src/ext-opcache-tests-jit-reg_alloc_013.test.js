// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/reg_alloc_013.phpt
  it("Register Alloction 013: Division by zero", function () {
    expect(parser.parseCode("<?php\nfunction foo() {\n    $j++;\n    $j++ % $j -= $a % $a = $j;\n}\nfoo();\n?>\nDONE")).toMatchSnapshot();
  });
});
