// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_search_basic.phpt
  it("imap_search() with unique ID (SE_UID) flag", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/setup/imap_include.inc');\n$imap_mail_box = setup_test_mailbox_for_uid_tests(\"imapsearchuid\");\nvar_dump(imap_search($imap_mail_box, 'ALL', SE_UID));\nimap_close($imap_mail_box);\n?>")).toMatchSnapshot();
  });
});
