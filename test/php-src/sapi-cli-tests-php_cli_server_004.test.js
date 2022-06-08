// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/php_cli_server_004.phpt
  it("Bug #55747 (request headers missed in $_SERVER)", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start('foreach($_SERVER as $k=>$v) { if (!strncmp($k, \"HTTP\", 4)) var_dump( $k . \":\" . $v); }');\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nGET / HTTP/1.1\nHost:{$host}\nUser-Agent:dummy\nCustom:foo\nReferer:http://www.php.net/\nHEADER\n)) {\n    while (!feof($fp)) {\n        echo fgets($fp);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
