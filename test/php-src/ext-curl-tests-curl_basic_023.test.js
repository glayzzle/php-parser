// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_basic_023.phpt
  it("Test curl_getinfo() function with CURLINFO_HTTP_VERSION parameter", function () {
    expect(parser.parseCode("<?php\ninclude 'server.inc';\n$ch = curl_init();\nvar_dump(0 === curl_getinfo($ch, CURLINFO_HTTP_VERSION));\n$host = curl_cli_server_start();\n$url = \"{$host}/get.inc?test=\";\ncurl_setopt($ch, CURLOPT_URL, $url);\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\ncurl_exec($ch);\nvar_dump(CURL_HTTP_VERSION_1_1 === curl_getinfo($ch, CURLINFO_HTTP_VERSION));\ncurl_close($ch);\n?>")).toMatchSnapshot();
  });
});
