// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug44098.phpt
  it("Bug #44098 (imap_utf8() returns only capital letters)", function () {
    expect(parser.parseCode("<?php\n$exp = 'Luzon®14 dot CoM';\n$res = imap_utf8('=?iso-8859-1?b?THV6b26uMTQ=?= dot CoM');\nvar_dump($res);\n?>")).toMatchSnapshot();
  });
});
