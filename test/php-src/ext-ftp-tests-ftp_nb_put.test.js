// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_nb_put.phpt
  it("Testing ftp_nb_put basic functionality", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nftp_login($ftp, 'user', 'pass');\n$ftp or die(\"Couldn't connect to the server\");\n$destination_file = basename(__FILE__);\n$source_file = __FILE__;\nvar_dump(ftp_nb_put($ftp, $destination_file, $source_file, FTP_ASCII));\n?>")).toMatchSnapshot();
  });
});
