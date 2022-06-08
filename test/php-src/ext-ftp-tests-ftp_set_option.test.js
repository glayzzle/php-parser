// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_set_option.phpt
  it("Testing ftp_set_option basic functionality", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nftp_login($ftp, 'user', 'pass');\n$ftp or die(\"Couldn't connect to the server\");\nvar_dump(ftp_set_option($ftp, FTP_TIMEOUT_SEC, 10));\nvar_dump(ftp_set_option($ftp, FTP_AUTOSEEK, false));\nvar_dump(ftp_set_option($ftp, FTP_USEPASVADDRESS, true));\n?>")).toMatchSnapshot();
  });
});
