// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_fget_basic.phpt
  it("FTP ftp_fget file for both binary and ASCII transfer modes", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nvar_dump(ftp_login($ftp, 'user', 'pass'));\n//test simple text transfer\n$fp = tmpfile();\nvar_dump(ftp_fget($ftp, $fp ,'a story.txt', FTP_ASCII));\nfseek($fp, 0);\necho fgets($fp);\n$position = ftell($fp);\n//test binary data transfer\nvar_dump(ftp_fget($ftp, $fp, 'binary data.bin', FTP_BINARY));\nfseek($fp, $position);\necho json_encode(fgets($fp)), \"\\n\";\n//test non-existent file request\nftp_fget($ftp, $fp ,'a warning.txt', FTP_ASCII);\n//remove file\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
