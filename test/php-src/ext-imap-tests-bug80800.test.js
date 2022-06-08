// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug80800.phpt
  it("Bug #80800: imap_open() fails when the flags parameter includes CL_EXPUNGE", function () {
    expect(parser.parseCode("<?php\nrequire_once __DIR__.'/setup/imap_include.inc';\n$mail_box = imap_open(IMAP_DEFAULT_MAILBOX, IMAP_MAILBOX_USERNAME, IMAP_MAILBOX_PASSWORD, flags: CL_EXPUNGE);\nvar_dump(imap_reopen($mail_box, IMAP_DEFAULT_MAILBOX, flags: CL_EXPUNGE));\nimap_close($mail_box);\necho 'Connected without any issues', \"\\n\";\n?>")).toMatchSnapshot();
  });
});
