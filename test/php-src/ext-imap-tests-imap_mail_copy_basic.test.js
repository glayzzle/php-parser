// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_mail_copy_basic.phpt
  it("Test imap_mail_copy() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing imap_mail_copy() : basic functionality ***\\n\";\nrequire_once(__DIR__.'/setup/imap_include.inc');\necho \"Create a new mailbox for test\\n\";\n$imap_stream = setup_test_mailbox('copybasic', 1);\n$check = imap_check($imap_stream);\necho \"Msg Count in new mailbox: \". $check->Nmsgs . \"\\n\";\nvar_dump(imap_mail_copy($imap_stream, '1', 'INBOX.' . IMAP_MAILBOX_PHPT_PREFIX  . 'copybasic'));\nimap_close($imap_stream);\n?>")).toMatchSnapshot();
  });
});
