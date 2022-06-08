// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_upper_basic.phpt
  it("Test ctype_upper() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ctype_upper() : basic functionality ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\n$c1 = 'HELLOWORLD';\n$c2 = \"Hello, World!\\n\";\nvar_dump(ctype_upper($c1));\nvar_dump(ctype_upper($c2));\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
