// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_fetchheader_variation5.phpt
  it("Test imap_fetchheader() function : usage variations - $message_num argument", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass different integers and strings as $message_num argument\n * to test behaviour of imap_fetchheader()\n */\necho \"*** Testing imap_fetchheader() : usage variations ***\\n\";\nrequire_once(__DIR__.'/setup/imap_include.inc');\n$stream_id = setup_test_mailbox('imapfetchheadervar5', 3, $mailbox, false); // set up temp mailbox with 3 msgs\n$sequences = [0, /* out of range */ 4, 1];\nforeach($sequences as $message_num) {\n    echo \"\\n-- \\$message_num is $message_num --\\n\";\n    try {\n        var_dump(imap_fetchheader($stream_id, $message_num));\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n}\n// clear error stack\nimap_errors();\n?>")).toMatchSnapshot();
  });
});
