// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_basic_003.phpt
  it("Test curl_opt() function with POST parameters", function () {
    expect(parser.parseCode("<?php\n  include 'server.inc';\n  $host = curl_cli_server_start();\n  // start testing\n  echo '*** Testing curl sending through GET an POST ***' . \"\\n\";\n  $url = \"{$host}/get.inc?test=getpost&get_param=Hello%20World\";\n  $ch = curl_init();\n  ob_start(); // start output buffering\n  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n  curl_setopt($ch, CURLOPT_POST, 1);\n  curl_setopt($ch, CURLOPT_POSTFIELDS, \"Hello=World&Foo=Bar&Person=John%20Doe\");\n  curl_setopt($ch, CURLOPT_URL, $url); //set the url we want to use\n  $curl_content = curl_exec($ch);\n  curl_close($ch);\n  var_dump( $curl_content );\n?>")).toMatchSnapshot();
  });
});
