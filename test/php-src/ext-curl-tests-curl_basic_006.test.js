// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_basic_006.phpt
  it("Test curl_opt() function with CURLOPT_WRITEFUNCTION parameter set to a closure", function () {
    expect(parser.parseCode("<?php\n  include 'server.inc';\n  $host = curl_cli_server_start();\n  // start testing\n  echo '*** Testing curl_setopt($ch, CURLOPT_WRITEFUNCTION, <closure>); ***' . \"\\n\";\n  $url = \"{$host}/get.inc?test=get\";\n  $ch = curl_init();\n  $alldata = '';\n  ob_start(); // start output buffering\n  curl_setopt($ch, CURLOPT_URL, $url); //set the url we want to use\n  curl_setopt($ch, CURLOPT_WRITEFUNCTION, function ($ch, $data) {\n    $GLOBALS['alldata'] .= $data;\n    return strlen ($data);\n  });\n  curl_exec($ch);\n  curl_close($ch);\n  ob_end_flush();\n  echo \"Data: $alldata\";\n?>\n===DONE===")).toMatchSnapshot();
  });
});
