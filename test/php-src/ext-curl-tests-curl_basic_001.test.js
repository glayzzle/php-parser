// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_basic_001.phpt
  it("Test curl_exec() function with basic functionality", function () {
    expect(parser.parseCode("<?php\n  include 'server.inc';\n  $host = curl_cli_server_start();\n  // start testing\n  echo \"*** Testing curl_exec() : basic functionality ***\\n\";\n  $url = \"{$host}/get.inc?test=get\";\n  $ch = curl_init();\n  ob_start(); // start output buffering\n  curl_setopt($ch, CURLOPT_URL, $url); //set the url we want to use\n  $ok = curl_exec($ch);\n  curl_close($ch);\n  $curl_content = ob_get_contents();\n  ob_end_clean();\n  if($ok) {\n    var_dump( $curl_content );\n  } else {\n    echo \"curl_exec returned false\";\n  }\n?>")).toMatchSnapshot();
  });
});
