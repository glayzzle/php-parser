// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug46739.phpt
  it("Bug #46739 (array returned by curl_getinfo should contain content_type key)", function () {
    expect(parser.parseCode("<?php\ninclude 'server.inc';\n$host = curl_cli_server_start();\n$ch = curl_init(\"{$host}/get.inc\");\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\ncurl_exec($ch);\n$info = curl_getinfo($ch);\necho (array_key_exists('content_type', $info)) ? \"set\" : \"not set\";\n?>")).toMatchSnapshot();
  });
});
