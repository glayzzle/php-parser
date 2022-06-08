// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_copy_handle_basic_002.phpt
  it("Test curl_copy_handle() with simple POST", function () {
    expect(parser.parseCode("<?php\n  include 'server.inc';\n  $host = curl_cli_server_start();\n  echo '*** Testing curl copy handle with simple POST ***' . \"\\n\";\n  $url = \"{$host}/get.inc?test=getpost\";\n  $ch = curl_init();\n  ob_start(); // start output buffering\n  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n  curl_setopt($ch, CURLOPT_POST, 1);\n  curl_setopt($ch, CURLOPT_POSTFIELDS, \"Hello=World&Foo=Bar&Person=John%20Doe\");\n  curl_setopt($ch, CURLOPT_URL, $url); //set the url we want to use\n  $copy = curl_copy_handle($ch);\n  curl_close($ch);\n  $curl_content = curl_exec($copy);\n  curl_close($copy);\n  var_dump( $curl_content );\n?>")).toMatchSnapshot();
  });
});
