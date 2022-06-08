// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/mbstring/tests/bug31911.phpt
  it("Bug #31911 (mb_decode_mimeheader() is case-sensitive to hex escapes)", function () {
    expect(parser.parseCode("<?php\necho mb_decode_mimeheader(\"Works: =?iso-8859-1?q?=3F=3F=3F?=\");\necho \"\\n\";\necho mb_decode_mimeheader(\"Fails: =?iso-8859-1?q?=3f=3f=3f?=\")\n?>")).toMatchSnapshot();
  });
});
