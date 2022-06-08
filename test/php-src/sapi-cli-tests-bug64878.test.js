// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // sapi/cli/tests/bug64878.phpt
  it("Bug #64878 (304 responses return Content-Type header)", function () {
    expect(parser.parseCode("<?php\ninclude \"php_cli_server.inc\";\nphp_cli_server_start('header(\"HTTP/1.1 304 Not Modified\")', null);\n$headers = get_headers('http://' . PHP_CLI_SERVER_ADDRESS);\necho count(array_filter($headers, function ($value) {\n    return stripos($value, 'Content-Type') === 0;\n}));\n?>")).toMatchSnapshot();
  });
});
