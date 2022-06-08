// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/php_cli_server_003.phpt
  it("Bug #55726 (Changing the working directory makes router script inaccessible)", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start('chdir(__DIR__); echo \"okey\";');\nvar_dump(file_get_contents(\"http://\" . PHP_CLI_SERVER_ADDRESS));\nvar_dump(file_get_contents(\"http://\" . PHP_CLI_SERVER_ADDRESS));\n?>")).toMatchSnapshot();
  });
});
