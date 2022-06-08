// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_space_variation2.phpt
  it("Test ctype_space() function : usage variations - different integers", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass different integers to ctype_space() to test which character codes are considered\n * valid whitespace characters\n */\necho \"*** Testing ctype_space() : usage variations ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\nfor ($c = 1; $c < 256; $c++) {\n    if (ctype_space(chr($c))) {\n        echo \"character code $c is a space character\\n\";\n    }\n}\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
