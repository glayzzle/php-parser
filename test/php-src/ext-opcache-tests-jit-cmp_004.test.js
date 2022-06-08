// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/jit/cmp_004.phpt
  it("JIT CMP: 004 Comparisons inside conditional statement", function () {
    expect(parser.parseCode("<?php\nfunction foo(bool $test, int $x) {\n    if (($test ? $x >= 1 : $x > 1)) {\n        return 1;\n    }\n    return 0;\n}\nvar_dump(foo(true, 9));\n?>")).toMatchSnapshot();
  });
});
