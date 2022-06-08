// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_alloc_basic1.phpt
  it("Testing ftp_alloc returns true", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nftp_login($ftp, 'user', 'pass');\nvar_dump(ftp_alloc($ftp, 1024));\n?>")).toMatchSnapshot();
  });
});
