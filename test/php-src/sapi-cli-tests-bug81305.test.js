// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug81305.phpt
  it("Bug #81305 (Built-in Webserver Drops Requests With \"Upgrade\" Header)", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start();\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\nif (fwrite($fp, <<<HEADER\nGET / HTTP/1.1\nHost: {$host}\nUpgrade: HTTP/2.0\nConnection: upgrade\nHEADER)) {\n\tfpassthru($fp);\n}\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
