// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/bug7216-2.phpt
  it("Bug #7216 (ftp_mkdir returns nothing (2))", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nvar_dump(ftp_login($ftp, 'anonymous', 'IEUser@'));\n// test for the correct behavior this time\nvar_dump(ftp_mkdir($ftp, 'CVS'));\n?>")).toMatchSnapshot();
  });
});
