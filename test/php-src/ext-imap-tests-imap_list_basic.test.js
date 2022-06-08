// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_list_basic.phpt
  it("imap_list() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/setup/imap_include.inc');\n$stream_id = imap_open(IMAP_DEFAULT_MAILBOX, IMAP_MAILBOX_USERNAME, IMAP_MAILBOX_PASSWORD) or\n    die(\"Cannot connect to mailbox \" .IMAP_DEFAULT_MAILBOX.\": \" . imap_last_error());\nimap_list($stream_id, IMAP_DEFAULT_MAILBOX,'ezerz');\n$z = imap_list($stream_id, IMAP_DEFAULT_MAILBOX,'*');\nvar_dump(is_array($z));\n// e.g. \"{127.0.0.1:143/norsh}INBOX\"\nvar_dump($z[0]);\nimap_close($stream_id);\n?>")).toMatchSnapshot();
  });
});
