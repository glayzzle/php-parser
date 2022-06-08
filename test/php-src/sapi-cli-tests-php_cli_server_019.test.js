// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/php_cli_server_019.phpt
  it("Implement Req #65917 (getallheaders() is not supported by the built-in web server)", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start(<<<'PHP'\nheader('Bar-Foo: Foo');\nvar_dump(getallheaders());\nvar_dump(apache_request_headers());\nvar_dump(apache_response_headers());\nPHP\n);\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\nif(fwrite($fp, <<<HEADER\nGET / HTTP/1.1\nHost: {$host}\nFoo-Bar: Bar\nHEADER\n)) {\n    while (!feof($fp)) {\n        echo fgets($fp);\n    }\n}\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
