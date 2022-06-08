// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_alpha_variation2.phpt
  it("Test ctype_alpha() function : usage variations - different integers", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass different integers to ctype_alpha() to test which character codes are considered\n * valid alphabetic characters\n */\necho \"*** Testing ctype_alpha() : usage variations ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\nfor ($i = 0; $i < 256; $i++) {\n    if (ctype_alpha(chr($i))) {\n        echo \"character code $i is alphabetic\\n\";\n    }\n}\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
