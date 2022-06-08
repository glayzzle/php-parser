// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug73630a.phpt
  it("Bug #73630 (Built-in Weberver - overwrite $_SERVER['request_uri'])", function () {
    expect(parser.parseCode("<?php\n$code = <<<'EOF'\necho \"won't happen\\n\";\nEOF;\ninclude \"php_cli_server.inc\";\nphp_cli_server_start($code);\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\n$path = \"/\" . str_repeat(\"x\", 16400) . \"//example.com\";\nvar_dump(file_get_contents(\"http://\" . PHP_CLI_SERVER_ADDRESS . \"$path\"));\n?>")).toMatchSnapshot();
  });
});
