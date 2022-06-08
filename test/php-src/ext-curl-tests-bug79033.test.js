// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug79033.phpt
  it("Bug #79033 (Curl timeout error with specific url and post)", function () {
    expect(parser.parseCode("<?php\ninclude 'server.inc';\n$host = curl_cli_server_start();\n$ch = curl_init();\ncurl_setopt_array($ch, [\n    CURLOPT_URL => \"{$host}/get.inc?test=post\",\n    CURLOPT_POST => true,\n    CURLOPT_POSTFIELDS => [],\n    CURLINFO_HEADER_OUT => true,\n    CURLOPT_RETURNTRANSFER => true,\n]);\nvar_dump(curl_exec($ch));\nvar_dump(curl_getinfo($ch)[\"request_header\"]);\n?>")).toMatchSnapshot();
  });
});
