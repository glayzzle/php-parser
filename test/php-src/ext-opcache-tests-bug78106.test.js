// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/opcache/tests/bug78106.phpt
  it("Bug #78106: Path resolution fails if opcache disabled during request", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . \"/php_cli_server.inc\";\nphp_cli_server_start(getenv('TEST_PHP_EXTRA_ARGS'));\necho file_get_contents(\"http://\" . PHP_CLI_SERVER_ADDRESS . \"/bug78106_test1.php\" );\necho file_get_contents(\"http://\" . PHP_CLI_SERVER_ADDRESS . \"/bug78106_test2.php\" );\necho file_get_contents(\"http://\" . PHP_CLI_SERVER_ADDRESS . \"/bug78106_test1.php\" );\n?>")).toMatchSnapshot();
  });
});
