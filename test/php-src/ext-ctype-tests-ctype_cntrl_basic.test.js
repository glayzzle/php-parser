// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_cntrl_basic.phpt
  it("Test ctype_cntrl() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ctype_cntrl() : basic functionality ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\n$c1 = \"\\r\\n\\t\";\n$c2 = \"Hello, World!\\n\";\nvar_dump(ctype_cntrl($c1));\nvar_dump(ctype_cntrl($c2));\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
