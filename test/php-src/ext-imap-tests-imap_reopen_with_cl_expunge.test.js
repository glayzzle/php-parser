// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_reopen_with_cl_expunge.phpt
  it("Test imap_reopen() using the CL_EXPUNGE flag", function () {
    expect(parser.parseCode("<?php\n// include file for required variables in imap_open()\nrequire_once(__DIR__.'/setup/imap_include.inc');\n$mailbox_suffix = 'imapreopenwithclexpunge';\n// set up temp mailbox with 3 messages\n$stream_id = setup_test_mailbox($mailbox_suffix , 3, $mailbox);\nvar_dump(imap_reopen($stream_id, IMAP_DEFAULT_MAILBOX . '.' . IMAP_MAILBOX_PHPT_PREFIX . $mailbox_suffix, flags: CL_EXPUNGE));\n// mark messages in inbox for deletion\nfor ($i = 1; $i < 4; $i++) {\n    imap_delete($stream_id, $i);\n}\necho \"\\n-- Call to imap_close() --\\n\";\nvar_dump( imap_close($stream_id) );\n// check that CL_EXPUNGE in previous imap_reopen() call worked\n$stream_id = imap_open($mailbox, IMAP_MAILBOX_USERNAME, IMAP_MAILBOX_PASSWORD);\necho \"There are now \" . imap_num_msg($stream_id) . \" msgs in mailbox '$mailbox'\\n\";\n// Close connection\nvar_dump( imap_close($stream_id) );\n?>")).toMatchSnapshot();
  });
});
