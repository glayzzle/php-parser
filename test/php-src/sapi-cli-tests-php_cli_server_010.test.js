// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/php_cli_server_010.phpt
  it("Bug #60180 ($_SERVER[\"PHP_SELF\"] incorrect)", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start('var_dump($_SERVER[\"PHP_SELF\"], $_SERVER[\"SCRIPT_NAME\"], $_SERVER[\"PATH_INFO\"], $_SERVER[\"QUERY_STRING\"]);', null);\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nGET /foo/bar?foo=bar HTTP/1.1\nHost: {$host}\nHEADER\n)) {\n    while (!feof($fp)) {\n        echo fgets($fp);\n    }\n}\nfclose($fp);\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nGET /index.php/foo/bar/?foo=bar HTTP/1.0\nHost: {$host}\nHEADER\n)) {\n    while (!feof($fp)) {\n        echo fgets($fp);\n    }\n}\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
