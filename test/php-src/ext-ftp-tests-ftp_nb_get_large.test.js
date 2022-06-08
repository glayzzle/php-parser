// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_nb_get_large.phpt
  it("Testing ftp_nb_fget can handle large files incl. resume", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nftp_login($ftp, 'user', 'pass');\nif (!$ftp) die(\"Couldn't connect to the server\");\n$local_file = __DIR__ . DIRECTORY_SEPARATOR . \"ftp_nb_get_large.txt\";\ntouch($local_file);\nftp_nb_get($ftp, $local_file, 'fget_large.txt', FTP_BINARY, 5368709119);\n$fp = fopen($local_file, 'r');\nfseek($fp, 5368709119);\nvar_dump(fread($fp, 1));\nvar_dump(filesize($local_file));\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
