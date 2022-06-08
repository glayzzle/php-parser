// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_delete.phpt
  it("Testing ftp_delete basic functionality", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nftp_login($ftp, 'user', 'pass');\n$ftp or die(\"Couldn't connect to the server\");\necho \"Test case #1: removal of existing file from FTP, should return true:\", PHP_EOL;\nvar_dump(ftp_delete($ftp, 'file1'));\necho \"Test case #2: removal of non-existent file from FTP, should return false:\", PHP_EOL;\nvar_dump(ftp_delete($ftp, 'false-file.boo'));\nftp_close($ftp);\n?>")).toMatchSnapshot();
  });
});
