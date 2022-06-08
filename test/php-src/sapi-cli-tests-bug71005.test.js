// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug71005.phpt
  it("Bug #71005 (Segfault in php_cli_server_dispatch_router())", function () {
    expect(parser.parseCode("<?php\n$code = <<<'EOF'\nset_exception_handler(function () { echo 'goodbye'; });\nthrow new Exception;\nEOF;\ninclude \"php_cli_server.inc\";\nphp_cli_server_start($code);\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nGET / HTTP/1.1\nHost: {$host}\nHEADER\n)) {\n    while (!feof($fp)) {\n        echo fgets($fp);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
