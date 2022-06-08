// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug66606_1.phpt
  it("Bug #66606 (Sets HTTP_CONTENT_TYPE but not CONTENT_TYPE) - GET request", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start('var_dump(isset($_SERVER[\"CONTENT_TYPE\"]), isset($_SERVER[\"CONTENT_LENGTH\"]))');\necho file_get_contents(\"http://\" . PHP_CLI_SERVER_ADDRESS);\n?>")).toMatchSnapshot();
  });
});
