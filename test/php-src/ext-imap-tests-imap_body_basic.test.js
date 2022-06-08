// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_body_basic.phpt
  it("Test imap_body() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing imap_body() : basic functionality ***\\n\";\nrequire_once(__DIR__.'/setup/imap_include.inc');\necho \"Create a new mailbox for test\\n\";\n$imap_stream = setup_test_mailbox(\"imapbodybasic\", 1);\n$check = imap_check($imap_stream);\necho \"Msg Count in new mailbox: \". $check->Nmsgs . \"\\n\";\n// show body for msg 1\nvar_dump(imap_body($imap_stream, 1));\n//Access via FT_UID\nvar_dump(imap_body($imap_stream, 1, FT_UID));\nimap_close($imap_stream);\n?>")).toMatchSnapshot();
  });
});
