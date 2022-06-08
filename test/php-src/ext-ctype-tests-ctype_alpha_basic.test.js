// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_alpha_basic.phpt
  it("Test ctype_alpha() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ctype_alpha() : basic functionality ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\n$c1 = 'abcXYZ';\n$c2 = \"Hello, World!\";\nvar_dump(ctype_alpha($c1));\nvar_dump(ctype_alpha($c2));\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
