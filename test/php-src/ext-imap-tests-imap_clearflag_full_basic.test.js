// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_clearflag_full_basic.phpt
  it("Test imap_clearflag_full() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing imap_clearflag_full() : basic functionality ***\\n\";\nrequire_once(__DIR__.'/setup/imap_include.inc');\necho \"Create a new mailbox for test\\n\";\n$imap_stream = setup_test_mailbox(\"imapclearflagfullbasic\", 10);\n$check = imap_check($imap_stream);\necho \"Initial msg count in new_mailbox : \". $check->Nmsgs . \"\\n\";\necho \"Set some flags\\n\";\nvar_dump(imap_setflag_full($imap_stream, \"1,3\", \"\\\\Seen \\\\Answered\"));\nvar_dump(imap_setflag_full($imap_stream, \"2,4\", \"\\\\Answered\"));\nvar_dump(imap_setflag_full($imap_stream, \"5,7\", \"\\\\Flagged \\\\Deleted\"));\nvar_dump(imap_setflag_full($imap_stream, \"6,8\", \"\\\\Deleted\"));\nvar_dump(imap_setflag_full($imap_stream, \"9,10\", \"\\\\Draft \\\\Flagged\"));\nvar_dump(imap_search($imap_stream, \"SEEN\"));\nvar_dump(imap_search($imap_stream, \"ANSWERED\"));\nvar_dump(imap_search($imap_stream, \"FLAGGED\"));\nvar_dump(imap_search($imap_stream, \"DELETED\"));\nvar_dump(imap_clearflag_full($imap_stream, \"1,4\", \"\\\\Answered\"));\nvar_dump(imap_clearflag_full($imap_stream, \"5,6,7,8\", \"\\\\Deleted\"));\nvar_dump(imap_clearflag_full($imap_stream, \"9\", \"\\\\Flagged\"));\nvar_dump(imap_search($imap_stream, \"SEEN\"));\nvar_dump(imap_search($imap_stream, \"ANSWERED\"));\nvar_dump(imap_search($imap_stream, \"FLAGGED\"));\nvar_dump(imap_search($imap_stream, \"DELETED\"));\nimap_close($imap_stream);\n?>")).toMatchSnapshot();
  });
});
