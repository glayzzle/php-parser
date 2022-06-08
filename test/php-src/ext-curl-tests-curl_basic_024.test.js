// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_basic_024.phpt
  it("Test curl_getinfo() function with CURLINFO_* from curl >= 7.52.0", function () {
    expect(parser.parseCode("<?php\ninclude 'server.inc';\n$ch = curl_init();\n$host = curl_cli_server_start();\n$url = \"{$host}/get.inc?test=\";\ncurl_setopt($ch, CURLOPT_URL, $url);\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\ncurl_exec($ch);\nvar_dump(CURLPROTO_HTTP === curl_getinfo($ch, CURLINFO_PROTOCOL));\nvar_dump(0 === curl_getinfo($ch, CURLINFO_PROXY_SSL_VERIFYRESULT));\nvar_dump(curl_getinfo($ch, CURLINFO_SCHEME));\ncurl_close($ch);\n?>")).toMatchSnapshot();
  });
});
