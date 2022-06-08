// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/bug79100.phpt
  it("Bug #79100 (Wrong FTP error messages)", function () {
    expect(parser.parseCode("<?php\n$bug79100 = true;\nrequire 'server.inc';\n$ftp = ftp_connect(\"127.0.0.1\", $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nvar_dump(ftp_login($ftp, 'user', 'pass'));\nvar_dump(ftp_set_option($ftp, FTP_TIMEOUT_SEC, 1));\nftp_systype($ftp);\n?>")).toMatchSnapshot();
  });
});
