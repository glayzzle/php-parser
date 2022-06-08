// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_chmod_basic.phpt
  it("Testing ftp_chmod returns file mode", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nftp_login($ftp, 'user', 'pass');\nvar_dump(ftp_chmod($ftp, 0644, 'test.txt'));\n?>")).toMatchSnapshot();
  });
});
