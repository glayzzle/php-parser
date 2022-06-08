// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/php_cli_server_017.phpt
  it("Implement Req #60850 (Built in web server does not set $_SERVER['SCRIPT_FILENAME'] when using router)", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start(<<<'PHP'\nvar_dump($_SERVER['SCRIPT_FILENAME']);\nPHP\n);\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nPOST / HTTP/1.1\nHost: {$host}\nHEADER\n)) {\n    while (!feof($fp)) {\n        echo fgets($fp);\n    }\n}\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
