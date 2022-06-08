// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/bug27809.phpt
  it("Bug #27809 (ftp_systype returns null)", function () {
    expect(parser.parseCode("<?php\n$bug27809=true;\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nvar_dump(ftp_login($ftp, 'anonymous', 'IEUser@'));\nvar_dump(ftp_systype($ftp));\n?>")).toMatchSnapshot();
  });
});
