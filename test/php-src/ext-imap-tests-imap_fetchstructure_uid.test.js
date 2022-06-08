// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_fetchstructure_uid.phpt
  it("imap_fetchstructure() passing a unique ID", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/setup/imap_include.inc');\n$imap_mail_box = setup_test_mailbox_for_uid_tests(\"imapfetchstructureuid\", $msg_no, $uid);\n// Usage of == because comparing objects\nvar_dump(imap_fetchstructure($imap_mail_box, $uid, FT_UID) == imap_fetchstructure($imap_mail_box, $msg_no));\nimap_close($imap_mail_box);\n?>")).toMatchSnapshot();
  });
});
