// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_open_with_cl_expunge.phpt
  it("Test imap_open() using the CL_EXPUNGE flag", function () {
    expect(parser.parseCode("<?php\n// include file for required variables in imap_open()\nrequire_once(__DIR__.'/setup/imap_include.inc');\n// set up temp mailbox with 3 messages\n$stream_id = setup_test_mailbox('imapopenwithclexpunge', 3, $mailbox, flags: CL_EXPUNGE);\n// mark messages in inbox for deletion\nfor ($i = 1; $i < 4; $i++) {\n    imap_delete($stream_id, $i);\n}\necho \"\\n-- Call to imap_close() --\\n\";\nvar_dump( imap_close($stream_id) );\n// check that CL_EXPUNGE in previous imap_open() call worked\n$stream_id = imap_open($mailbox, IMAP_MAILBOX_USERNAME, IMAP_MAILBOX_PASSWORD);\necho \"There are now \" . imap_num_msg($stream_id) . \" msgs in mailbox '$mailbox'\\n\";\n// Close connection\nvar_dump( imap_close($stream_id) );\n?>")).toMatchSnapshot();
  });
});
