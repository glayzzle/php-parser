// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_handle_clone.phpt
  it("Test that cloning of Curl objects is supported", function () {
    expect(parser.parseCode("<?php\ninclude 'server.inc';\n$host = curl_cli_server_start();\n$ch1 = curl_init();\ncurl_setopt($ch1, CURLOPT_URL, $host);\ncurl_setopt($ch1, CURLOPT_RETURNTRANSFER, 1);\ncurl_exec($ch1);\n$ch2 = clone $ch1;\ncurl_setopt($ch2, CURLOPT_RETURNTRANSFER, 0);\nvar_dump(curl_getinfo($ch1, CURLINFO_EFFECTIVE_URL) === curl_getinfo($ch2, CURLINFO_EFFECTIVE_URL));\ncurl_exec($ch2);\n?>")).toMatchSnapshot();
  });
});
