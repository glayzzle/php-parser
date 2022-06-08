// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug66109.phpt
  it("Bug #66109 (Option CURLOPT_CUSTOMREQUEST can't be reset to default.)", function () {
    expect(parser.parseCode("<?php\ninclude 'server.inc';\n$host = curl_cli_server_start();\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_URL, \"{$host}/get.inc?test=method\");\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\ncurl_setopt($ch, CURLOPT_CUSTOMREQUEST, 'DELETE');\nvar_dump(curl_exec($ch));\ncurl_setopt($ch, CURLOPT_CUSTOMREQUEST, NULL);\nvar_dump(curl_exec($ch));\ncurl_close($ch);\n?>")).toMatchSnapshot();
  });
});
