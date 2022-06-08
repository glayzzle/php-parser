// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_punct_basic.phpt
  it("Test ctype_punct() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ctype_punct() : basic functionality ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\n$c1 = '@!$*';\n$c2 = 'hello, world!';\nvar_dump(ctype_punct($c1));\nvar_dump(ctype_punct($c2));\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
