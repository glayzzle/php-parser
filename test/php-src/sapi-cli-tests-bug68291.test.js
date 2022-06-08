// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug68291.phpt
  it("Bug #68291 (404 on urls with '+')", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\n$docRoot = php_cli_server_start(NULL, NULL)->docRoot;\nfile_put_contents($docRoot . '/bug68291+test.html', 'Found');\necho file_get_contents('http://' . PHP_CLI_SERVER_ADDRESS . '/bug68291+test.html');\n@unlink($docRoot . '/bug68291+test.html');\n?>")).toMatchSnapshot();
  });
});
