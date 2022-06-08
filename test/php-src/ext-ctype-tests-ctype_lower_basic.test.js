// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_lower_basic.phpt
  it("Test ctype_lower() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ctype_lower() : basic functionality ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\n$c1 = 'helloworld';\n$c2 = \"Hello, world!\\n\";\nvar_dump(ctype_lower($c1));\nvar_dump(ctype_lower($c2));\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
