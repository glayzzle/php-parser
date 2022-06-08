// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/php_cli_server_009.phpt
  it("PATH_INFO (relevant to #60112)", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start('var_dump($_SERVER[\"PATH_INFO\"]);', null);\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nGET /foo/bar HTTP/1.1\nHost: {$host}\nHEADER\n)) {\n    while (!feof($fp)) {\n        echo fgets($fp);\n    }\n}\nfclose($fp);\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nGET /foo/bar/ HTTP/1.0\nHost: {$host}\nHEADER\n)) {\n    while (!feof($fp)) {\n        echo fgets($fp);\n    }\n}\nfclose($fp);\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nGET /foo/bar.js HTTP/1.0\nHost: {$host}\nHEADER\n)) {\n    while (!feof($fp)) {\n        echo fgets($fp);\n        break;\n    }\n}\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
