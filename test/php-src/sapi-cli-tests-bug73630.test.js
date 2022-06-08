// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug73630.phpt
  it("Bug #73630 (Built-in Weberver - overwrite $_SERVER['request_uri'])", function () {
    expect(parser.parseCode("<?php\n$code = <<<'EOF'\nvar_dump(strncmp($_SERVER['REQUEST_URI'], \"/overflow.php\", strlen(\"/overflow.php\")));\nvar_dump(strlen($_SERVER['QUERY_STRING']));\nEOF;\ninclude \"php_cli_server.inc\";\nphp_cli_server_start($code);\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\n$path = \"/overflow.php?\" . str_repeat(\"x\", 16400) . \"//example.com\";\nif (fwrite($fp, <<<HEADER\nGET $path HTTP/1.1\nHost: {$host}\nHEADER\n)) {\n\twhile (!feof($fp)) {\n\t\techo fgets($fp);\n\t}\n}\n?>")).toMatchSnapshot();
  });
});
