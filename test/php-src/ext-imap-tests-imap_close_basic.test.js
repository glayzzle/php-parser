// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_close_basic.phpt
  it("Test imap_close() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing imap_close() : basic functionality ***\\n\";\n// include file for required variables in imap_open()\nrequire_once(__DIR__.'/setup/imap_include.inc');\n// Initialize required variables\n$stream_id = setup_test_mailbox('imapclosebasic', 3, $mailbox); // set up temp mailbox with 3 messages\n$options = CL_EXPUNGE;\n// mark messages in inbox for deletion\nfor ($i = 1; $i < 4; $i++) {\n    imap_delete($stream_id, $i);\n}\n// Calling imap_close() with all possible arguments\necho \"\\n-- Call to imap_close() with all possible arguments --\\n\";\nvar_dump( imap_close($stream_id, $options) );\n// check that CL_EXPUNGE worked\n$stream_id = imap_open($mailbox, IMAP_MAILBOX_USERNAME, IMAP_MAILBOX_PASSWORD);\necho \"There are now \" . imap_num_msg($stream_id) . \" msgs in mailbox '$mailbox'\\n\";\n// Calling imap_close() with mandatory arguments\necho \"\\n-- Call to imap_close() with mandatory arguments --\\n\";\nvar_dump( imap_close($stream_id) );\n?>")).toMatchSnapshot();
  });
});
