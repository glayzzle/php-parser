// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/bug39458-2.phpt
  it("Bug #39458 (ftp_nlist() returns false on empty directories (other server behaviour))", function () {
    expect(parser.parseCode("<?php\n$bug39458=1;\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nvar_dump(ftp_login($ftp, 'user', 'pass'));\nvar_dump(ftp_nlist($ftp, ''));\nvar_dump(ftp_nlist($ftp, 'emptydir'));\nvar_dump(ftp_nlist($ftp, 'bogusdir'));\nftp_close($ftp);\n?>")).toMatchSnapshot();
  });
});
