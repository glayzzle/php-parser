// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/bug80901.phpt
  it("Bug #80901 (Info leak in ftp extension)", function () {
    expect(parser.parseCode("<?php\n$bug80901 = true;\nrequire 'server.inc';\n$ftp = ftp_connect(\"127.0.0.1\", $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nvar_dump(ftp_login($ftp, 'user', 'pass'));\nftp_systype($ftp);\n?>")).toMatchSnapshot();
  });
});
