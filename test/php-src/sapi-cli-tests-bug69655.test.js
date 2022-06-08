// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug69655.phpt
  it("Bug #69655 (php -S changes MKCALENDAR request method to MKCOL)", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start();\nforeach (['MKCO', 'MKCOLL', 'M'] as $method) {\n    $context = stream_context_create(['http' => ['method' => $method]]);\n    // the following is supposed to emit a warning for unsupported methods\n    file_get_contents(\"http://\" . PHP_CLI_SERVER_ADDRESS, false, $context);\n}\n?>")).toMatchSnapshot();
  });
});
