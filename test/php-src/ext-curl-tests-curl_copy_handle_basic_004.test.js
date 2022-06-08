// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_copy_handle_basic_004.phpt
  it("Test curl_copy_handle() after exec()", function () {
    expect(parser.parseCode("<?php\n  include 'server.inc';\n  $host = curl_cli_server_start();\n  echo '*** Test curl_copy_handle() after exec() ***' . \"\\n\";\n  $url = \"{$host}/get.inc?test=getpost&get_param=Hello%20World\";\n  $ch = curl_init();\n  ob_start(); // start output buffering\n  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n  curl_setopt($ch, CURLOPT_URL, $url); //set the url we want to use\n  $curl_content = curl_exec($ch);\n  $copy = curl_copy_handle($ch);\n  curl_close($ch);\n  $curl_content_copy = curl_exec($copy);\n  curl_close($copy);\n  var_dump( $curl_content_copy );\n?>")).toMatchSnapshot();
  });
});
