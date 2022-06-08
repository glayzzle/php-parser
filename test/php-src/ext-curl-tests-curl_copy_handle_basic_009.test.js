// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_copy_handle_basic_009.phpt
  it("Test curl_copy_handle() with CURLINFO_HEADER_OUT", function () {
    expect(parser.parseCode("<?php\n  include 'server.inc';\n  $host = curl_cli_server_start();\n  $url = \"{$host}/get.inc\";\n  $ch = curl_init($url);\n  curl_setopt($ch, CURLINFO_HEADER_OUT, 1);\n  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n  $ch2 = curl_copy_handle($ch);\n  echo curl_exec($ch), PHP_EOL;\n  var_dump(strstr(curl_getinfo($ch, CURLINFO_HEADER_OUT), \"\\r\", true));\n  unset($ch);\n  echo curl_exec($ch2), PHP_EOL;\n  var_dump(strstr(curl_getinfo($ch2, CURLINFO_HEADER_OUT), \"\\r\", true));\n?>")).toMatchSnapshot();
  });
});
