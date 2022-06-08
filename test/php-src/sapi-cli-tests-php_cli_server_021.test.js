// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/php_cli_server_021.phpt
  it("Digest Authentication", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start('var_dump(!isset($_SERVER[\"PHP_AUTH_USER\"]), !isset($_SERVER[\"PHP_AUTH_PW\"]), $_SERVER[\"PHP_AUTH_DIGEST\"]);');\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nGET / HTTP/1.1\nHost: {$host}\nAuthorization: digest username=\"Mufasa\", realm=\"testrealm@host.com\", nonce=\"dcd98b7102dd2f0e8b11d0f600bfb0c093\", uri=\"/dir/index.html\", qop=auth, nc=00000001, cnonce=\"0a4f113b\", response=\"6629fae49393a05397450978507c4ef1\", opaque=\"5ccc069c403ebaf9f0171e9517f40e41\"\nHEADER\n)) {\n\tfpassthru($fp);\n}\n?>")).toMatchSnapshot();
  });
});
