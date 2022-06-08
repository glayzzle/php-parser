// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug66606_2.phpt
  it("Bug #66606 (Sets HTTP_CONTENT_TYPE but not CONTENT_TYPE) - POST request", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start('var_dump($_SERVER[\"CONTENT_TYPE\"], $_SERVER[\"CONTENT_LENGTH\"])');\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\nif (fwrite($fp, <<<HEADER\nPOST /index.php HTTP/1.1\nHost: {$host}\nContent-Type: application/x-www-form-urlencoded\nContent-Length: 3\na=b\nHEADER\n)) {\n    while (!feof($fp)) {\n        echo fgets($fp);\n    }\n}\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
