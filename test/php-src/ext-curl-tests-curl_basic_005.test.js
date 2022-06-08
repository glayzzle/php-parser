// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_basic_005.phpt
  it("Test curl_opt() function with user agent", function () {
    expect(parser.parseCode("<?php\n  include 'server.inc';\n  $host = curl_cli_server_start();\n  // start testing\n  echo '*** Testing curl with user agent ***' . \"\\n\";\n  $url = \"{$host}/get.inc?test=useragent\";\n  $ch = curl_init();\n  ob_start(); // start output buffering\n  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n  curl_setopt($ch, CURLOPT_USERAGENT, 'cURL phpt');\n  curl_setopt($ch, CURLOPT_URL, $url); //set the url we want to use\n  $curl_content = curl_exec($ch);\n  curl_close($ch);\n  var_dump( $curl_content );\n?>")).toMatchSnapshot();
  });
});
