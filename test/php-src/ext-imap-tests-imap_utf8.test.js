// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_utf8.phpt
  it("imap_utf8() tests", function () {
    expect(parser.parseCode("<?php\nvar_dump(imap_utf8(\"\"));\nvar_dump(imap_utf8(1));\nvar_dump(imap_utf8(\"test\"));\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
