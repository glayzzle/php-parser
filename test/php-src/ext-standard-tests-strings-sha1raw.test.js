// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/strings/sha1raw.phpt
  it("sha1() with RAW output", function () {
    expect(parser.parseCode("<?php\necho bin2hex(sha1(\"abc\", TRUE)).\"\\n\";\necho bin2hex(sha1(\"abcdbcdecdefdefgefghfghighijhijkijkljklmklmnlmnomnopnopq\", TRUE)).\"\\n\";\necho bin2hex(sha1(\"a\", TRUE)).\"\\n\";\necho bin2hex(sha1(\"0123456701234567012345670123456701234567012345670123456701234567\", TRUE)).\"\\n\";\n?>")).toMatchSnapshot();
  });
});
