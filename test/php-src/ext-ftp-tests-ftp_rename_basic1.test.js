// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_rename_basic1.phpt
  it("FTP basic ftp_rename calls", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nftp_login($ftp, 'user', 'pass');\nvar_dump(ftp_rename($ftp, 'existing_file', 'nonexisting_file'));\nvar_dump(ftp_rename($ftp, 'nonexisting_file', 'nonexisting_file'));\n?>")).toMatchSnapshot();
  });
});
