// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug80226.phpt
  it("Bug #80226 (imap_sort() leaks sortpgm memory)", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/setup/imap_include.inc');\necho \"Create a new mailbox for test\\n\";\n$stream = setup_test_mailbox(\"bug80226\", 0);\nvar_dump(imap_sort($stream, SORTFROM, 0));\n?>")).toMatchSnapshot();
  });
});
