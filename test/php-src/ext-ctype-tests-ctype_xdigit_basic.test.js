// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_xdigit_basic.phpt
  it("Test ctype_xdigit() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ctype_xdigit() : basic functionality ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\n$c1 = 'abcdefABCDEF0123456789';\n$c2 = 'face 034';\nvar_dump(ctype_xdigit($c1));\nvar_dump(ctype_xdigit($c2));\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
