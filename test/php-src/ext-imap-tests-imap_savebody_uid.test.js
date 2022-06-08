// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_savebody_uid.phpt
  it("imap_savebody() passing a unique ID", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/setup/imap_include.inc');\n$imap_mail_box = setup_test_mailbox_for_uid_tests(\"imapsavebodyuid\", $msg_no, $uid);\n$section = '';\n$stream_uid = fopen('php://memory', 'w+');\nimap_savebody($imap_mail_box, $stream_uid, $uid, $section, FT_UID);\n$stream_msg_no = fopen('php://memory', 'w+');\nimap_savebody($imap_mail_box, $stream_msg_no, $msg_no, $section);\n// Compare what was written.\nrewind($stream_uid);\nrewind($stream_msg_no);\nvar_dump(stream_get_contents($stream_uid) === stream_get_contents($stream_msg_no));\nimap_close($imap_mail_box);\n?>")).toMatchSnapshot();
  });
});
