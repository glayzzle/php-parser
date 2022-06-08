// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/imap/tests/bug77153.phpt
  it("Bug #77153 (imap_open allows to run arbitrary shell commands via mailbox parameter)", function () {
    expect(parser.parseCode("<?php\n$payload = \"echo 'BUG'> \" . __DIR__ . '/__bug';\n$payloadb64 = base64_encode($payload);\n$server = \"x -oProxyCommand=echo\\t$payloadb64|base64\\t-d|sh}\";\n@imap_open('{'.$server.':143/imap}INBOX', '', '');\n// clean\nimap_errors();\nvar_dump(file_exists(__DIR__ . '/__bug'));\n?>")).toMatchSnapshot();
  });
});
