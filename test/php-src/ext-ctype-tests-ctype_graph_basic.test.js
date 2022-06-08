// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_graph_basic.phpt
  it("Test ctype_graph() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing ctype_graph() : basic functionality ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\n$c1 = 'helloWorld!';\n$c2 = \"Hello, world!\\n\";\nvar_dump(ctype_graph($c1));\nvar_dump(ctype_graph($c2));\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
