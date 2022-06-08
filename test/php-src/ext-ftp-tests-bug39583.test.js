// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/bug39583.phpt
  it("Bug #39583 (FTP always transfers in binary mode)", function () {
    expect(parser.parseCode("<?php\n$bug39583=1;\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nvar_dump(ftp_login($ftp, 'user', 'pass'));\n$source_file = __FILE__;\n$destination_file = basename(__FILE__);\n// upload the file\n$upload = ftp_put($ftp, $destination_file, $source_file, FTP_ASCII);\n// check upload status\nif (!$upload) {\n       echo \"FTP upload has failed!\";\n   } else {\n       echo \"Uploaded $source_file as $destination_file\";\n   }\n// close the FTP stream\nftp_close($ftp);\n?>")).toMatchSnapshot();
  });
});
