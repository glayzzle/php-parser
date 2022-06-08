// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_fetchbody_variation6.phpt
  it("Test imap_fetchbody() function : usage variations - $message_num arg", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass different integers, strings, msg sequences and msg UIDs as $message_num argument\n * to test behaviour of imap_fetchbody()\n */\necho \"*** Testing imap_fetchbody() : usage variations ***\\n\";\nrequire_once(__DIR__.'/setup/imap_include.inc');\n//Initialise required variables\n$stream_id = setup_test_mailbox('imapfetchbodyvar6', 3); // set up temp mailbox with  simple msgs\n$section = 1;\n$sequences = [0, /* out of range */ 4, 1];\nforeach($sequences as $message_num) {\n    echo \"\\n-- \\$message_num is $message_num --\\n\";\n    try {\n        var_dump(imap_fetchbody($stream_id, $message_num, $section));\n    } catch (\\ValueError $e) {\n        echo $e->getMessage() . \\PHP_EOL;\n    }\n}\n?>")).toMatchSnapshot();
  });
});
