// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_get_option.phpt
  it("Testing ftp_get_option basic functionality", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\ndefine('FOO_BAR', 10);\n$ftp = ftp_connect('127.0.0.1', $port);\nftp_login($ftp, 'user', 'pass');\n$ftp or die(\"Couldn't connect to the server\");\nvar_dump(ftp_get_option($ftp, FTP_TIMEOUT_SEC));\nvar_dump(ftp_get_option($ftp, FTP_AUTOSEEK));\nvar_dump(ftp_get_option($ftp, FTP_USEPASVADDRESS));\ntry {\n    ftp_get_option($ftp, FOO_BAR);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
