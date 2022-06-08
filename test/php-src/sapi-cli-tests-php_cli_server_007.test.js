// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/php_cli_server_007.phpt
  it("Bug #55758 (Digest Authenticate missed in 5.4)", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start('header(\\'WWW-Authenticate: Digest realm=\"foo\",qop=\"auth\",nonce=\"XXXXX\",opaque=\"'.md5(\"foo\").'\"\\');');\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nGET / HTTP/1.1\nHost: {$host}\nAuthorization: Basic Zm9vOmJhcg==\nHEADER\n)) {\n    while (!feof($fp)) {\n        echo fgets($fp);\n    }\n}\n?>")).toMatchSnapshot();
  });
});
