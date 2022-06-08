// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_copy_handle_basic_008.phpt
  it("Test curl_copy_handle() with CURLOPT_PROGRESSFUNCTION", function () {
    expect(parser.parseCode("<?php\n  include 'server.inc';\n  $host = curl_cli_server_start();\n  $url = \"{$host}/get.inc\";\n  $ch = curl_init($url);\n  curl_setopt($ch, CURLOPT_NOPROGRESS, 0);\n  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n  curl_setopt($ch, CURLOPT_PROGRESSFUNCTION, function() { });\n  $ch2 = curl_copy_handle($ch);\n  echo curl_exec($ch), PHP_EOL;\n  unset($ch);\n  echo curl_exec($ch2);\n?>")).toMatchSnapshot();
  });
});
