// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/php_cli_server_002.phpt
  it("$_SERVER variable", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start('var_dump($_SERVER[\"DOCUMENT_ROOT\"], $_SERVER[\"SERVER_SOFTWARE\"], $_SERVER[\"SERVER_NAME\"], $_SERVER[\"SERVER_PORT\"]);');\nvar_dump(file_get_contents(\"http://\" . PHP_CLI_SERVER_ADDRESS));\n?>")).toMatchSnapshot();
  });
});
