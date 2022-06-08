// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug64076.phpt
  it("Bug #64076 (imap_sort() does not return FALSE on failure)", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__ . '/setup/imap_include.inc';\n$stream = setup_test_mailbox('bug64076', 2);\nimap_errors(); // clear error stack\nvar_dump(imap_sort($stream, SORTFROM, 0, 0, 'UNSUPPORTED SEARCH CRITERIUM'));\nvar_dump(imap_errors() !== false);\n?>")).toMatchSnapshot();
  });
});
