// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/002.phpt
  it("FTP login (SSL)", function () {
    expect(parser.parseCode("<?php\n$ssl = 1;\nrequire 'server.inc';\n$ftp = ftp_ssl_connect('127.0.0.1', $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nvar_dump(ftp_login($ftp, 'user', 'pass'));\nvar_dump(ftp_raw($ftp, 'HELP'));\nvar_dump(ftp_raw($ftp, 'HELP HELP'));\nvar_dump(ftp_close($ftp));\n?>")).toMatchSnapshot();
  });
});
