// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/filesize_large.phpt
  it("Verify php can handle filesizes >32bit", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nftp_login($ftp, 'user', 'pass');\nvar_dump(ftp_size($ftp, 'largefile'));\nftp_close($ftp);\n?>")).toMatchSnapshot();
  });
});
