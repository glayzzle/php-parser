// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/network/bug80067.phpt
  it("Bug #80067 (Omitting the port in bindto setting errors)", function () {
    expect(parser.parseCode("<?php\n$context = stream_context_create(['socket' => ['bindto' => '0']]);\nvar_dump(file_get_contents('https://httpbin.org/get', false, $context) !== false);\n?>")).toMatchSnapshot();
  });
});
