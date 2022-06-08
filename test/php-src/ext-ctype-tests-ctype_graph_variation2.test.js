// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_graph_variation2.phpt
  it("Test ctype_graph() function : usage variations - different integers", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass different integers to ctype_graph() to test which character codes are considered\n * valid visibly printable characters\n */\necho \"*** Testing ctype_graph() : usage variations ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\nfor ($i = 0; $i < 256; $i++) {\n    if (ctype_graph(chr($i))) {\n        echo \"character code $i is a printable character\\n\";\n    }\n}\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
