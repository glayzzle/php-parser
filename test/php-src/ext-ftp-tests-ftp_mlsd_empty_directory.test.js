// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_mlsd_empty_directory.phpt
  it("ftp_mlsd() must not return false on empty directories", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nvar_dump(ftp_login($ftp, 'user', 'pass'));\nvar_dump(ftp_mlsd($ftp, 'emptydir'));\nvar_dump(ftp_mlsd($ftp, 'bogusdir'));\nftp_close($ftp);\n?>")).toMatchSnapshot();
  });
});
