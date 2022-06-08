// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/ftp/tests/ftp_set_option_errors.phpt
  it("Testing ftp_set_option errors while setting up", function () {
    expect(parser.parseCode("<?php\nrequire 'server.inc';\ndefine('FOO_BAR', 10);\n$ftp = ftp_connect('127.0.0.1', $port);\nftp_login($ftp, 'user', 'pass');\n$ftp or die(\"Couldn't connect to the server\");\n$options = [\n    [ 'option' => FTP_TIMEOUT_SEC, 'value' => 0 ],\n\t[ 'option' => FTP_TIMEOUT_SEC, 'value' => '0' ],\n\t[ 'option' => FTP_USEPASVADDRESS, 'value' => ['1'] ],\n\t[ 'option' => FTP_AUTOSEEK, 'value' => 'true' ],\n\t[ 'option' => FOO_BAR, 'value' => 1 ],\n];\nforeach ($options as $option) try {\n\tvar_dump(ftp_set_option($ftp, $option['option'], $option['value']));\n} catch (\\Throwable $ex) {\n\techo \"Exception: \", $ex->getMessage(), \"\\n\";\n}")).toMatchSnapshot();
  });
});
