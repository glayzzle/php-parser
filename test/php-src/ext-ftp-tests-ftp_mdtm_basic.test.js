// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_mdtm_basic.phpt
  it("Test the File Modification Time as described in http://tools.ietf.org/html/rfc3659#section-3.1", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\n$ftp = ftp_connect('127.0.0.1', $port);\nif (!$ftp) die(\"Couldn't connect to the server\");\nvar_dump(ftp_login($ftp, 'user', 'pass'));\ndate_default_timezone_set('UTC');\n$time = ftp_mdtm($ftp, \"A\");\necho date(\"F d Y H:i:s u\",$time), PHP_EOL;\n$time = ftp_mdtm($ftp, \"B\");\necho date(\"F d Y H:i:s u\",$time), PHP_EOL;\n$time = ftp_mdtm($ftp, \"C\");\necho date(\"F d Y H:i:s u\",$time), PHP_EOL;\n$time = ftp_mdtm($ftp, \"D\");\nvar_dump($time);\n$time = ftp_mdtm($ftp, \"19990929043300 File6\");\necho date(\"F d Y H:i:s u\",$time), PHP_EOL;\n$time = ftp_mdtm($ftp, \"MdTm 19990929043300 file6\");\nvar_dump($time);\n?>")).toMatchSnapshot();
  });
});
