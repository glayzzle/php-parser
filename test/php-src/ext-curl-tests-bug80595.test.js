// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug80595.phpt
  it("Bug #80595 (Resetting POSTFIELDS to empty array breaks request)", function () {
    expect(parser.parseCode("<?php\ninclude 'server.inc';\n$host = curl_cli_server_start();\n$ch = curl_init();\ncurl_setopt_array($ch, [\n    CURLOPT_RETURNTRANSFER => true,\n    CURLOPT_POST           => true,\n    CURLOPT_URL            => \"{$host}/get.inc?test=post\",\n]);\ncurl_setopt($ch, CURLOPT_POSTFIELDS, ['foo' => 'bar']);\nvar_dump(curl_exec($ch));\ncurl_setopt($ch, CURLOPT_POSTFIELDS, []);\nvar_dump(curl_exec($ch));\n?>")).toMatchSnapshot();
  });
});
