// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_setflag_full_uid.phpt
  it("imap_setflag_full() passing a unique ID", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/setup/imap_include.inc');\n$imap_mail_box = setup_test_mailbox_for_uid_tests(\"imapsetflagfulluid\");\n/* This works on the assumption that UID message 3 to 6 inclusive are deleted. */\n// Testing individual entry\nimap_setflag_full($imap_mail_box, '8', '\\Answered', ST_UID);\n// Testing multiple entries entry\nimap_setflag_full($imap_mail_box, '7,10', '\\Deleted', ST_UID);\n// Testing entry range\nimap_setflag_full($imap_mail_box, '7:9', '\\Flagged', ST_UID);\n// Testing entry range invalid\nvar_dump(imap_setflag_full($imap_mail_box, '4:9', '\\Seen', ST_UID));\necho 'ALL: ';\nvar_dump(imap_search($imap_mail_box, 'ALL'));\necho 'ALL (with UID correspondance): ';\nvar_dump(imap_search($imap_mail_box, 'ALL', SE_UID));\necho 'ANSWERED: ';\nvar_dump(imap_search($imap_mail_box, 'ANSWERED'));\necho 'DELETED: ';\nvar_dump(imap_search($imap_mail_box, 'DELETED'));\necho 'FLAGGED: ';\nvar_dump(imap_search($imap_mail_box, 'FLAGGED'));\necho 'SEEN: ';\nvar_dump(imap_search($imap_mail_box, 'SEEN'));\nimap_close($imap_mail_box);\n?>")).toMatchSnapshot();
  });
});
