// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_pasv.phpt
  it("Testing ftp_pasv basic funcionality", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nftp_login($ftp, 'user', 'pass');\n$ftp or die(\"Couldn't connect to the server\");\nvar_dump(ftp_pasv($ftp, false));\n?>")).toMatchSnapshot();
  });
});
