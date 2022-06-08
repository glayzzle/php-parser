// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_xdigit_variation2.phpt
  it("Test ctype_xdigit() function : usage variations - different integers", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass different integers to ctype_xdigit() to test which character codes are considered\n * valid hexadecimal 'digits'\n */\necho \"*** Testing ctype_xdigit() : usage variations ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\nfor($c = 1; $c < 256; $c++) {\n    if (ctype_xdigit(chr($c))) {\n        echo \"character code $c is a hexadecimal 'digit'\\n\";\n    }\n}\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
