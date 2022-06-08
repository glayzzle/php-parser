// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_append.phpt
  it("ftp_append() create new file and append something", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nvar_dump(ftp_login($ftp, 'user', 'pass'));\n$fooPath = __DIR__ . '/ftp_append_foo';\nfile_put_contents($fooPath, 'foo');\nvar_dump(ftp_append($ftp, 'ftp_append_foobar', $fooPath, FTP_BINARY));\n$barPath = __DIR__ . '/ftp_append_bar';\nfile_put_contents($barPath, 'bar');\nvar_dump(ftp_append($ftp, 'ftp_append_foobar', $barPath, FTP_BINARY));\n$fooBarPath = __DIR__ . '/ftp_append_foobar';\nvar_dump(file_get_contents($fooBarPath));\nftp_close($ftp);\n?>")).toMatchSnapshot();
  });
});
