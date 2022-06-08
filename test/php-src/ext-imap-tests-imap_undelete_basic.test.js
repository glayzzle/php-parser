// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_undelete_basic.phpt
  it("imap_undelete() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/setup/imap_include.inc');\n$stream_id = setup_test_mailbox('imapundeletebasic', 1);\nimap_delete($stream_id, 1);\nvar_dump(imap_undelete($stream_id, 1));\nimap_close($stream_id);\n?>")).toMatchSnapshot();
  });
});
