// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_getsubscribed_basic.phpt
  it("imap_getsubscribed() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/setup/imap_include.inc');\n$stream_id = imap_open(IMAP_DEFAULT_MAILBOX, IMAP_MAILBOX_USERNAME, IMAP_MAILBOX_PASSWORD) or\n    die(\"Cannot connect to mailbox \". IMAP_DEFAULT_MAILBOX. \": \" . imap_last_error());\nvar_dump(imap_getsubscribed($stream_id, IMAP_DEFAULT_MAILBOX, 'ezDvfXvbvcxSerz'));\necho \"Checking OK\\n\";\n$newbox = IMAP_DEFAULT_MAILBOX . \".\" . IMAP_MAILBOX_PHPT_PREFIX;\nimap_createmailbox($stream_id, $newbox);\nimap_subscribe($stream_id, $newbox);\n$z = imap_getsubscribed($stream_id, IMAP_DEFAULT_MAILBOX, '*');\nvar_dump(is_array($z));\nvar_dump($z[0]);\nimap_close($stream_id);\n?>")).toMatchSnapshot();
  });
});
