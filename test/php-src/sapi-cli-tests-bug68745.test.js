// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug68745.phpt
  it("Bug #68745 (Invalid HTTP requests make web server segfault)", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start('var_dump(count($_SERVER));', 'not-index.php');\n$host = PHP_CLI_SERVER_HOSTNAME;\n$fp = php_cli_server_connect();\nif(fwrite($fp, \"GET www.example.com:80 HTTP/1.1\\r\\n\\r\\n\")) {\n    while (!feof($fp)) {\n        echo fgets($fp);\n    }\n}\nfclose($fp);\n?>")).toMatchSnapshot();
  });
});
