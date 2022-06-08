// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug53377.phpt
  it("Bug #53377 (imap_mime_header_decode() doesn't ignore \\t during long MIME header unfolding)", function () {
    expect(parser.parseCode("<?php\n$s = \"=?UTF-8?Q?=E2=82=AC?=\";\n$header = \"$s\\n $s\\n\\t$s\";\nvar_dump(imap_mime_header_decode($header));\n?>")).toMatchSnapshot();
  });
});
