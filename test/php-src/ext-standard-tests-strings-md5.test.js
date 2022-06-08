// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/md5.phpt
  it("md5() with ASCII output", function () {
    expect(parser.parseCode("<?php\necho md5(\"\").\"\\n\";\necho md5(\"a\").\"\\n\";\necho md5(\"abc\").\"\\n\";\necho md5(\"message digest\").\"\\n\";\necho md5(\"abcdefghijklmnopqrstuvwxyz\").\"\\n\";\necho md5(\"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\").\"\\n\";\necho md5(\"12345678901234567890123456789012345678901234567890123456789012345678901234567890\").\"\\n\";\n?>")).toMatchSnapshot();
  });
});
