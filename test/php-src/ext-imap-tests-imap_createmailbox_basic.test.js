// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_createmailbox_basic.phpt
  it("Test imap_createmailbox() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing imap_createmailbox() : basic functionality ***\\n\";\nrequire_once __DIR__.'/setup/imap_include.inc';\n$imap_stream = setup_test_mailbox(\"imapcreatemailboxbasic\", 0);\n$newname = \"phpnewbox\";\necho \"Newname will be '$newname'\\n\";\n$newbox = imap_utf7_encode(IMAP_SERVER.$newname);\nif (imap_createmailbox($imap_stream, $newbox)) {\n    echo \"Add a couple of msgs to '$newname' mailbox\\n\";\n    populate_mailbox($imap_stream, $newbox, 2);\n    $status = imap_status($imap_stream, $newbox, SA_ALL);\n    if ($status) {\n        echo \"Your new mailbox '$newname' has the following status:\\n\";\n        echo \"Messages:    \" . $status->messages    . \"\\n\";\n        echo \"Recent:      \" . $status->recent      . \"\\n\";\n        echo \"Unseen:      \" . $status->unseen      . \"\\n\";\n        echo \"UIDnext:     \" . $status->uidnext     . \"\\n\";\n        echo \"UIDvalidity: \" . $status->uidvalidity . \"\\n\";\n    } else {\n        echo \"imap_status on new mailbox failed: \" . imap_last_error() . \"\\n\";\n    }\n    if (imap_deletemailbox($imap_stream, $newbox)) {\n        echo \"Mailbox '$newname' removed to restore initial state\\n\";\n    } else {\n        echo \"imap_deletemailbox on new mailbox failed: \" . implode(\"\\n\", imap_errors()) . \"\\n\";\n    }\n} else {\n    echo \"could not create new mailbox: \" . implode(\"\\n\", imap_errors()) . \"\\n\";\n}\nimap_close($imap_stream);\n?>")).toMatchSnapshot();
  });
});
