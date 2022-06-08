// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_get_basic.phpt
  it("FTP ftp_get file for both binary and ASCII transfer modes", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nvar_dump(ftp_login($ftp, 'user', 'pass'));\n//test simple text transfer\n$tmpfname = tempnam(__DIR__, \"ftp_test\");\nvar_dump(ftp_get($ftp, $tmpfname ,'a story.txt', FTP_ASCII));\necho file_get_contents($tmpfname);\nunlink($tmpfname);\n//test binary data transfer\n$tmpfname = tempnam(__DIR__, \"ftp_test\");\nvar_dump(ftp_get($ftp, $tmpfname, 'binary data.bin', FTP_BINARY));\necho json_encode(file_get_contents($tmpfname)), \"\\n\";\nunlink($tmpfname);\n//test non-existent file request\nftp_get($ftp, $tmpfname ,'a warning.txt', FTP_ASCII);\n?>")).toMatchSnapshot();
  });
});
