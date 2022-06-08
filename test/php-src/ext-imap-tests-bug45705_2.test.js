// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug45705_2.phpt
  it("Bug #45705 test #2 (imap rfc822_parse_adrlist() modifies passed address parameter)", function () {
    expect(parser.parseCode("<?php\n$envelope = array('return_path' => 'John Doe <john@example.com>',\n                  'from'        => 'John Doe <john@example.com>',\n                  'reply_to'    => 'John Doe <john@example.com>',\n                  'to'          => 'John Doe <john@example.com>',\n                  'cc'          => 'John Doe <john@example.com>',\n                  'bcc'         => 'John Doe <john@example.com>',\n);\nvar_dump($envelope);\nimap_mail_compose($envelope, [1 => ['cc' => 'Steve Doe <steve@example.com>',]]);\nvar_dump($envelope);\n?>")).toMatchSnapshot();
  });
});
