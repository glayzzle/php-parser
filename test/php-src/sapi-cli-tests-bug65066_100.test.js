// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug65066_100.phpt
  it("Bug #65066 (Cli server not responsive when responding with 422 http status code): 100 status code", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start('http_response_code(100);');\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nGET / HTTP/1.1\nHost: {$host}\nHEADER\n)) {\n    while (!feof($fp)) {\n        echo fgets($fp);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
