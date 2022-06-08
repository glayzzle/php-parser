// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_undelete_uid.phpt
  it("imap_undelete() passing a unique ID", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/setup/imap_include.inc');\n$imap_mail_box = setup_test_mailbox_for_uid_tests(\"imapundeleteuid\", $msg_no, $uid);\nimap_delete($imap_mail_box, $uid, FT_UID);\nimap_undelete($imap_mail_box, $uid, FT_UID);\nimap_expunge($imap_mail_box);\nvar_dump(imap_search($imap_mail_box, 'ALL', SE_UID));\nimap_close($imap_mail_box);\n?>")).toMatchSnapshot();
  });
});
