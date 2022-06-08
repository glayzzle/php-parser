// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/php_cli_server_001.phpt
  it("basic function", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start();\nvar_dump(file_get_contents(\"http://\" . PHP_CLI_SERVER_ADDRESS));\n?>")).toMatchSnapshot();
  });
});
