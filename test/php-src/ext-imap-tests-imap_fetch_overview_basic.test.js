// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_fetch_overview_basic.phpt
  it("Test imap_fetch_overview() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing imap_fetch_overview() : basic functionality ***\\n\";\nrequire_once __DIR__.'/setup/imap_include.inc';\n// create a new mailbox and add two new messages to it\n$stream_id = setup_test_mailbox('imapfetchoverviewbasic', 2, $mailbox, false);\n// get UID for new message\n$msg_no = imap_uid($stream_id, 1);\n$options = FT_UID;\n// Calling imap_fetch_overview() with all possible arguments\necho \"\\n-- All possible arguments --\\n\";\n$a =  imap_fetch_overview($stream_id, \"$msg_no\", $options) ;\necho \"\\n--> Object #1\\n\";\ndisplayOverviewFields($a[0]);\n// Calling imap_fetch_overview() with mandatory arguments\necho \"\\n-- Mandatory arguments --\\n\";\n$a = imap_fetch_overview($stream_id, '1:2') ;\n//first object in array\necho \"\\n--> Object #1\\n\";\ndisplayOverviewFields($a[0]);\n//Second object in array\necho \"\\n--> Object #2\\n\";\ndisplayOverviewFields($a[1]);\nimap_close($stream_id);\n?>")).toMatchSnapshot();
  });
});
