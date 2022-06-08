// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug70264.phpt
  it("Bug #70264 (CLI server directory traversal)", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start(null, null);\necho file_get_contents(\"http://\" . PHP_CLI_SERVER_ADDRESS . \"/..\\\\CREDITS\");\necho file_get_contents(\"http://\" . PHP_CLI_SERVER_ADDRESS . \"/..%5CCREDITS\");\n?>")).toMatchSnapshot();
  });
});
