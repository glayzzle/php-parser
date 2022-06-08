// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_basic_019.phpt
  it("Test curl_getinfo() function with CURLINFO_EFFECTIVE_URL parameter", function () {
    expect(parser.parseCode("<?php\n  include 'server.inc';\n  $host = curl_cli_server_start();\n  $url = \"http://{$host}/get.inc?test=\";\n  $ch  = curl_init();\n  curl_setopt($ch, CURLOPT_URL, $url);\n  curl_exec($ch);\n  $info = curl_getinfo($ch, CURLINFO_EFFECTIVE_URL);\n  var_dump($url == $info);\n  curl_close($ch);\n?>")).toMatchSnapshot();
  });
});
