// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_sort_uid.phpt
  it("imap_sort() basics", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/setup/imap_include.inc');\n$imap_mail_box = setup_test_mailbox_for_uid_tests(\"imapsortbasic\");\nvar_dump(imap_sort($imap_mail_box, SORTSUBJECT, 0));\nvar_dump(imap_sort($imap_mail_box, SORTSUBJECT, 0, SE_UID));\nimap_close($imap_mail_box);\n?>")).toMatchSnapshot();
  });
});
