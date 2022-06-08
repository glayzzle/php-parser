// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_fget_basic1.phpt
  it("Testing ftp_fget ignore autoresume if autoseek is switched off", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nftp_login($ftp, 'user', 'pass');\nif (!$ftp) die(\"Couldn't connect to the server\");\nftp_set_option($ftp, FTP_AUTOSEEK, false);\n$local_file = __DIR__ . DIRECTORY_SEPARATOR . \"ftp_fget_basic1.txt\";\n$handle = fopen($local_file, 'w');\nvar_dump(ftp_fget($ftp, $handle, 'fget.txt', FTP_ASCII, FTP_AUTORESUME));\nvar_dump(file_get_contents($local_file));\n?>")).toMatchSnapshot();
  });
});
