// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_fetch_overview_variation5.phpt
  it("Test imap_fetch_overview() function : usage variations - $msg_no argument", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass different sequences/msg numbers as $msg_no argument to test behaviour\n * of imap_fetch_overview()\n */\necho \"*** Testing imap_fetch_overview() : usage variations ***\\n\";\nrequire_once __DIR__.'/setup/imap_include.inc';\n$stream_id = setup_test_mailbox('imapfetchoverviewvar5', 3, $mailbox, false); // set up temp mailbox with 3 msgs\n$sequences = [\n    0,\n    4, // out of range\n    '4', // out of range\n    '2',\n    '1,3',\n    '1, 2',\n    '1:3', // pass uid without setting FT_UID option\n];\nforeach ($sequences as $msg_no) {\n    echo \"\\n-- \\$msg_no is $msg_no --\\n\";\n    $overview = imap_fetch_overview($stream_id, $msg_no);\n    if (!$overview) {\n        echo imap_last_error() . \"\\n\";\n    } else {\n        foreach($overview as $ov) {\n            echo \"\\n\";\n            displayOverviewFields($ov);\n        }\n    }\n}\n// clear error stack\nimap_errors();\n?>")).toMatchSnapshot();
  });
});
