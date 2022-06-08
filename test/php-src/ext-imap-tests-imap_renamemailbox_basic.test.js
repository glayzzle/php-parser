// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_renamemailbox_basic.phpt
  it("imap_renamemailbox() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/setup/imap_include.inc');\n$stream_id = setup_test_mailbox('imaprenamemailbox1', 1);\n$mailboxBaseName = IMAP_DEFAULT_MAILBOX . '.' . IMAP_MAILBOX_PHPT_PREFIX;\n//commented because of bug #49901\n//$ancError = error_reporting(0);\n//$z = imap_renamemailbox($stream_id, $newbox.'not2', $newbox.'2');\n//var_dump($z);\n//error_reporting($ancError);\necho \"Checking OK\\n\";\nvar_dump(imap_renamemailbox($stream_id, $mailboxBaseName . 'imaprenamemailbox1', $mailboxBaseName . 'imaprenamemailbox2'));\nimap_close($stream_id);\n?>")).toMatchSnapshot();
  });
});
