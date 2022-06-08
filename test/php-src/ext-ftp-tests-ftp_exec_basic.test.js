// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_exec_basic.phpt
  it("Testing ftp_exec returns true", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nftp_login($ftp, 'user', 'pass');\nif (!$ftp) die(\"Couldn't connect to the server\");\nvar_dump(ftp_exec($ftp, 'ls -al'));\n?>")).toMatchSnapshot();
  });
});
