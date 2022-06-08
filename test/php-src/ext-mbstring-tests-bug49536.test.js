// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug49536.phpt
  it("Bug #49536 (mb_detect_encoding() returns incorrect results when strict_mode is turned on)", function () {
    expect(parser.parseCode("<?php\n// non-strict mode\nvar_dump(mb_detect_encoding(\"A\\x81\", \"SJIS\", false));\n// strict mode\nvar_dump(mb_detect_encoding(\"A\\x81\", \"SJIS\", true));\n// non-strict mode\nvar_dump(mb_detect_encoding(\"\\xc0\\x00\", \"UTF-8\", false));\n// strict mode\nvar_dump(mb_detect_encoding(\"\\xc0\\x00\", \"UTF-8\", true));\n?>")).toMatchSnapshot();
  });
});
