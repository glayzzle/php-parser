// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/mb_chr_ord.phpt
  it("mb_chr() and mb_ord()", function () {
    expect(parser.parseCode("<?php\nini_set('internal_encoding', 'utf-8');\nfor($ch = 1; $ch < 80000; $ch++) {\n    $str = mb_chr($ch);\n    if (false === $str) {\n        echo \"ERROR($ch)\\n\";\n        continue;\n    }\n    if ($ch != mb_ord($str)) {\n        echo \"REAL ERROR($ch)\\n\";\n    }\n}\necho 'OK';\n?>")).toMatchSnapshot();
  });
});
