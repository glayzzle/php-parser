// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug69953.phpt
  it("FR #69953 (Support MKCALENDAR request method)", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start('echo $_SERVER[\"REQUEST_METHOD\"];');\n$context = stream_context_create(['http' => ['method' => 'MKCALENDAR']]);\nvar_dump(file_get_contents(\"http://\" . PHP_CLI_SERVER_ADDRESS, false, $context));\n?>")).toMatchSnapshot();
  });
});
