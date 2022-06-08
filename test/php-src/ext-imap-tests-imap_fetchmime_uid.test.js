// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_fetchmime_uid.phpt
  it("imap_fetchmime() passing a unique ID", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/setup/imap_include.inc');\n$imap_mail_box = setup_test_mailbox_for_uid_tests(\"imapfetchmimeuid\", $msg_no, $uid);\n$section = '2';\nvar_dump(imap_fetchbody($imap_mail_box, $uid, $section, FT_UID) === imap_fetchbody($imap_mail_box, $msg_no, $section));\nimap_close($imap_mail_box);\n?>")).toMatchSnapshot();
  });
});
