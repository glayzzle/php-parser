// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/add_009.phpt
  it("JIT ADD: 009 two array references", function () {
    expect(parser.parseCode("<?php\n$a = []; \nvar_dump(($b =& $a) + ($b =& $a));\n?>")).toMatchSnapshot();
  });
});
