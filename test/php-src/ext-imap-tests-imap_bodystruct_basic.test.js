// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_bodystruct_basic.phpt
  it("Test imap_bodystruct() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing string imap_bodystruct : basic functionality ***\\n\";\nrequire_once(__DIR__.'/setup/imap_include.inc');\necho \"Create a new mailbox for test and add a multipart msgs\\n\";\n$imap_stream = setup_test_mailbox(\"imapbodystructbasic\", 1, $mailbox, \"multipart\");\necho \"\\nGet and validate structure of body part 1\\n\";\n$m = imap_bodystruct($imap_stream, 1, \"1\");\n$mandatoryFields = [\n    'ifsubtype',\n    'ifdescription',\n    'ifid',\n    'ifdisposition',\n    'ifdparameters',\n    'ifparameters',\n];\nfunction isValid($param) {\n    return ($param == 0) || ($param == 1);\n}\nforeach($mandatoryFields as $mf) {\n    if (isValid($m->$mf)) {\n        echo \"$mf is 0 or 1\\n\";\n    } else {\n        echo \"$mf FAIL\\n\";\n    }\n}\nif(is_array($m->parameters)) {\n    echo \"parameters is an array\\n\";\n}\necho \"\\nTry to get part 4!\\n\";\nvar_dump(imap_bodystruct($imap_stream, 1, \"4\"));\nimap_close($imap_stream);\n?>")).toMatchSnapshot();
  });
});
