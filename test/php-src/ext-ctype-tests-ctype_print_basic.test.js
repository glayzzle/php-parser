// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_print_basic.phpt
  it("Test ctype_print() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ctype_print() : basic functionality ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\n$c1 = \"Hello, World!\";\n$c2 = null;\nvar_dump(ctype_print($c1));\nvar_dump(ctype_print($c2));\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
