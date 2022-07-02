// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/md5raw.phpt
  it("md5() with RAW output", function () {
    expect(parser.parseCode("<?php\necho bin2hex(md5(\"\", TRUE)).\"\\n\";\necho bin2hex(md5(\"a\", TRUE)).\"\\n\";\necho bin2hex(md5(\"abc\", TRUE)).\"\\n\";\necho bin2hex(md5(\"message digest\", TRUE)).\"\\n\";\necho bin2hex(md5(\"abcdefghijklmnopqrstuvwxyz\", TRUE)).\"\\n\";\necho bin2hex(md5(\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\", TRUE)).\"\\n\";\necho bin2hex(md5(\"12345678901234567890123456789012345678901234567890123456789012345678901234567890\", TRUE)).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
