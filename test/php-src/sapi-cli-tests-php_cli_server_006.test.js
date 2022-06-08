// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/php_cli_server_006.phpt
  it("Bug #55755 (SegFault when outputting header WWW-Authenticate)", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start('var_dump($_SERVER[\"PHP_AUTH_USER\"], $_SERVER[\"PHP_AUTH_PW\"]);');\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nGET / HTTP/1.1\nHost: {$host}\nAuthorization: Basic Zm9vOmJhcg==\nHEADER\n)) {\n    while (!feof($fp)) {\n        echo fgets($fp);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
