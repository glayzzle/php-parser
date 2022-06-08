// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_setflag_full_basic.phpt
  it("imap_setflag_full() basic test", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/setup/imap_include.inc');\n$imap_mail_box = setup_test_mailbox(\"imapsetflagfullbasic\", 10);\n// Testing individual entry\nimap_setflag_full($imap_mail_box, '1', '\\Answered');\n// Testing multiple entries entry\nimap_setflag_full($imap_mail_box, '2,7', '\\Deleted');\n// Testing entry range\nimap_setflag_full($imap_mail_box, '3:5', '\\Flagged');\necho 'ALL: ';\nvar_dump(imap_search($imap_mail_box, 'ALL'));\necho 'ANSWERED: ';\nvar_dump(imap_search($imap_mail_box, 'ANSWERED'));\necho 'DELETED: ';\nvar_dump(imap_search($imap_mail_box, 'DELETED'));\necho 'FLAGGED: ';\nvar_dump(imap_search($imap_mail_box, 'FLAGGED'));\nimap_close($imap_mail_box);\n?>")).toMatchSnapshot();
  });
});
