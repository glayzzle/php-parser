// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_space_basic.phpt
  it("Test ctype_space() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ctype_space() : basic functionality ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\n$c1 = \" \\t\\r\\n\";\nvar_dump(ctype_space($c1));\n$c2 = \"Hello, world!\\n\";\nvar_dump(ctype_space($c2));\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
