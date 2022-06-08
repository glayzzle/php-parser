// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_nb_fput.phpt
  it("Testing ftp_nb_fput basic functionality", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nftp_login($ftp, 'user', 'pass');\n$ftp or die(\"Couldn't connect to the server\");\n$destination_file = basename(__FILE__);\n$source_file = fopen(__FILE__, 'r');\nvar_dump(ftp_nb_fput($ftp, $destination_file, $source_file, FTP_ASCII));\n?>")).toMatchSnapshot();
  });
});
