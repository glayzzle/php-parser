// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/php_cli_server_020.phpt
  it("Use SEARCH as a HTTP verb", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start('var_dump($_SERVER[\"REQUEST_METHOD\"]);');\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nSEARCH / HTTP/1.1\nHost: {$host}\nHEADER\n)) {\n    while (!feof($fp)) {\n        echo fgets($fp);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
