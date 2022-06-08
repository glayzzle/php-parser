// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_fetchheader_basic.phpt
  it("Test imap_fetchheader() function : basic function", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing imap_fetchheader() : basic functionality ***\\n\";\nrequire_once(__DIR__.'/setup/imap_include.inc');\n// Initialise all required variables\n$stream_id = setup_test_mailbox('imapfetchheaderbasic', 1, $mailbox, false); // setup temp mailbox with 1 msg\n$msg_no = 1;\n$options = array('FT_UID' => FT_UID, 'FT_INTERNAL' => FT_INTERNAL,\n                 'FT_PREFETCHTEXT' => FT_PREFETCHTEXT);\n// Calling imap_fetchheader() with all possible arguments\necho \"\\n-- All possible arguments --\\n\";\nforeach ($options as $key => $option) {\n    echo \"-- Option is $key --\\n\";\n    if ($key == 'FT_UID') {\n        $msg_uid = imap_uid($stream_id, $msg_no);\n        var_dump(imap_fetchheader($stream_id, $msg_uid, $option));\n    } else {\n        var_dump(imap_fetchheader($stream_id, $msg_no, $option));\n    }\n}\n// Calling imap_fetchheader() with mandatory arguments\necho \"\\n-- Mandatory arguments --\\n\";\nvar_dump( imap_fetchheader($stream_id, $msg_no) );\n?>")).toMatchSnapshot();
  });
});
