// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_nb_continue.phpt
  it("Testing whether ftp_nb_continue() fetches more data", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$file = \"mediumfile.txt\";\n$ftp = ftp_connect('127.0.0.1', $port);\nftp_login($ftp, 'user', 'pass');\nif (!$ftp) die(\"Couldn't connect to the server\");\n$local_file = __DIR__ . DIRECTORY_SEPARATOR . $file;\ntouch($local_file);\n$r = ftp_nb_get($ftp, $local_file, $file, FTP_BINARY);\nwhile ($r == FTP_MOREDATA) {\n    $r = ftp_nb_continue($ftp);\n}\nftp_close($ftp);\necho file_get_contents($local_file);\n?>")).toMatchSnapshot();
  });
});
