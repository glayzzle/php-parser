// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_setopt_basic004.phpt
  it("curl_setopt() call with CURLOPT_RETURNTRANSFER", function () {
    expect(parser.parseCode("<?php\ninclude 'server.inc';\n$host = curl_cli_server_start();\n// start testing\necho \"*** curl_setopt() call with CURLOPT_RETURNTRANSFER set to 1\\n\";\n$url = \"{$host}/\";\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\ncurl_setopt($ch, CURLOPT_URL, $url);\n$curl_content = curl_exec($ch);\ncurl_close($ch);\nvar_dump( $curl_content );\necho \"*** curl_setopt() call with CURLOPT_RETURNTRANSFER set to 0\\n\";\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 0);\ncurl_setopt($ch, CURLOPT_URL, $url);\nob_start();\n$curl_content = curl_exec($ch);\nob_end_clean();\ncurl_close($ch);\nvar_dump( $curl_content );\n?>")).toMatchSnapshot();
  });
});
