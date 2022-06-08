// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/imap_savebody_basic.phpt
  it("imap_savebody() function : basic functionality", function () {
    expect(parser.parseCode("<?php\nrequire_once(__DIR__.'/setup/imap_include.inc');\n$stream_id = setup_test_mailbox('imapsavebodybasic', 1);\n$file = __DIR__.'/tmpsavebody.txt';\n//with URL\n$z = imap_savebody($stream_id, $file, 1);\nvar_dump($z);\necho \"Size: \".filesize($file).\"\\n\";\n//With FOPEN\n$fp = fopen($file, 'w');\n$z = imap_savebody($stream_id, $fp, 1);\nfclose($fp);\nvar_dump($z);\necho \"Size: \".filesize($file).\"\\n\";\nimap_close($stream_id);\n?>")).toMatchSnapshot();
  });
});
