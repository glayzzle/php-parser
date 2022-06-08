// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/001.phpt
  it("FTP login", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nvar_dump(ftp_login($ftp, 'user', 'pass'));\nvar_dump(ftp_raw($ftp, 'HELP'));\nvar_dump(ftp_raw($ftp, 'HELP HELP'));\nvar_dump(ftp_close($ftp));\n?>")).toMatchSnapshot();
  });
});
