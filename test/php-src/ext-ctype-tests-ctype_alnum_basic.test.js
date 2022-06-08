// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_alnum_basic.phpt
  it("Test ctype_alnum() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ctype_alnum() : basic functionality ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\n$c1 = 'abcXYZ';\n$c2 = ' \\t*@';\nvar_dump(ctype_alnum($c1));\nvar_dump(ctype_alnum($c2));\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
