// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_rawlist_basic2.phpt
  it("Testing ftp_rawlist returns false on server error", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nftp_login($ftp, 'user', 'pass');\nif (!$ftp) die(\"Couldn't connect to the server\");\nvar_dump(ftp_rawlist($ftp, 'no_exists/'));\n?>")).toMatchSnapshot();
  });
});
