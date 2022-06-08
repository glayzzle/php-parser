// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_site_basic.phpt
  it("ftp_site function basic functionality", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\n$ftp or die(\"Couldn't connect to the server\");\nftp_login($ftp, 'user', 'pass') or die(\"Couldn't login into the server\");\nvar_dump(ftp_site($ftp, 'CHMOD 0600 file'));\nvar_dump(ftp_site($ftp, 'foo bar baz'));\n?>")).toMatchSnapshot();
  });
});
