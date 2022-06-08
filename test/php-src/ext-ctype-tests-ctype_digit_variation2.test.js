// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_digit_variation2.phpt
  it("Test ctype_digit() function : usage variations - different integers", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass different integers to ctype_digit() to test which character codes are considered\n * valid decimal digits\n */\necho \"*** Testing ctype_digit() : usage variations ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\nfor ($i = 0; $i < 256; $i++) {\n    if (ctype_digit(chr($i))) {\n        echo \"character code $i is a numeric digit\\n\";\n    }\n}\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
