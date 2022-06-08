// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ctype/tests/ctype_punct_variation2.phpt
  it("Test ctype_punct() function : usage variations - different integers", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass different integers to ctype_punct() to test which character codes are considered\n * valid punctuation characters\n */\necho \"*** Testing ctype_punct() : usage variations ***\\n\";\n$orig = setlocale(LC_CTYPE, \"C\");\nfor ($c = 1; $c < 256; $c++) {\n    if (ctype_punct(chr($c))) {\n        echo \"character code $c is punctuation\\n\";\n    }\n}\nsetlocale(LC_CTYPE, $orig);\n?>")).toMatchSnapshot();
  });
});
