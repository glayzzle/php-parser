// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_append_basic.phpt
  it("Test imap_append() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing imap_append() : basic functionality ***\\n\";\nrequire_once(__DIR__. '/setup/imap_include.inc');\necho \"Create a new mailbox for test\\n\";\n$imap_stream = setup_test_mailbox(\"imapappendbaisc\", 0);\n$mb_details = imap_mailboxmsginfo($imap_stream);\necho \"Add a couple of msgs to the new mailbox\\n\";\nvar_dump(imap_append($imap_stream, $mb_details->Mailbox\n                   , \"From: webmaster@something.com\\r\\n\"\n                   . \"To: info@something.com\\r\\n\"\n                   . \"Subject: Test message\\r\\n\"\n                   . \"\\r\\n\"\n                   . \"this is a test message, please ignore\\r\\n\"\n                   ));\nvar_dump(imap_append($imap_stream, $mb_details->Mailbox\n                   , \"From: webmaster@something.com\\r\\n\"\n                   . \"To: info@something.com\\r\\n\"\n                   . \"Subject: Another test\\r\\n\"\n                   . \"\\r\\n\"\n                   . \"this is another test message, please ignore it too!!\\r\\n\"\n                   ));\n$check = imap_check($imap_stream);\necho \"Msg Count after append : \". $check->Nmsgs . \"\\n\";\necho \"List the msg headers\\n\";\nvar_dump(imap_headers($imap_stream));\nimap_close($imap_stream);\n?>")).toMatchSnapshot();
  });
});
