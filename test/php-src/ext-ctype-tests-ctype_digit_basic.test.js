// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_digit_basic.phpt
  it("Test ctype_digit() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ctype_digit() : basic functionality ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\n$c1 = '1234';\n$c2 = 'abc123';\nvar_dump(ctype_digit($c1));\nvar_dump(ctype_digit($c2));\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
