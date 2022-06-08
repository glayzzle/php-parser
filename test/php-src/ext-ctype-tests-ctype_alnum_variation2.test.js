// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_alnum_variation2.phpt
  it("Test ctype_alnum() function : usage variations - different integers", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass different integers to ctype_alnum() to test which character codes are considered\n * valid alphanumeric characters\n */\necho \"*** Testing ctype_alnum() : usage variations ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\nfor ($i = 0; $i < 256; $i++) {\n    if (ctype_alnum(chr($i))) {\n        echo \"character code $i is alpha numeric\\n\";\n    }\n}\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
