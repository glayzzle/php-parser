// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/bug37799.phpt
  it("Bug #37799 (ftp_ssl_connect() falls back to non-ssl connection)", function () {
    expect(parser.parseCode("<?php\n$bug37799=$ssl=1;\nrequire 'server.inc';\n$ftp = ftp_ssl_connect('127.0.0.1', $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nvar_dump(ftp_login($ftp, 'user', 'pass'));\nftp_close($ftp);\n?>")).toMatchSnapshot();
  });
});
