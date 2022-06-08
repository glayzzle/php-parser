// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_errors_basic.phpt
  it("Test imap_errors() function : anonymous user not supported", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing imap_errors() : anonymous user not supported ***\\n\";\nrequire_once __DIR__.'/setup/imap_include.inc';\n$mbox = @imap_open(IMAP_DEFAULT_MAILBOX, IMAP_MAILBOX_USERNAME, IMAP_MAILBOX_PASSWORD, OP_ANONYMOUS);\necho \"List any errors\\n\";\nvar_dump(imap_errors());\n?>")).toMatchSnapshot();
  });
});
