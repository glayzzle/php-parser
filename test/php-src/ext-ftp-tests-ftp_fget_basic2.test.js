// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_fget_basic2.phpt
  it("Testing ftp_fget autoresume", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nftp_login($ftp, 'user', 'pass');\nif (!$ftp) die(\"Couldn't connect to the server\");\n$local_file = __DIR__ . DIRECTORY_SEPARATOR . \"ftp_fget_basic2.txt\";\nfile_put_contents($local_file, 'ASCIIFoo');\n$handle = fopen($local_file, 'a');\nvar_dump(ftp_fget($ftp, $handle, 'fgetresume.txt', FTP_ASCII, FTP_AUTORESUME));\nvar_dump(file_get_contents($local_file));\n?>")).toMatchSnapshot();
  });
});
