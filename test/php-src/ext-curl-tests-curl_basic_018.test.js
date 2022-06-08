// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_basic_018.phpt
  it("Test curl_setopt() with curl_multi function with basic functionality", function () {
    expect(parser.parseCode("<?php\n  include 'server.inc';\n  $host = curl_cli_server_start();\n  // start testing\n  echo \"*** Testing curl_exec() : basic functionality ***\\n\";\n  $url = \"{$host}/get.inc?test=get\";\n  $chs = array(\n    0 => curl_init(),\n    1 => curl_init(),\n    2 => curl_init(),\n  );\n  ob_start(); // start output buffering\n  $options = array(\n    CURLOPT_RETURNTRANSFER => 1,\n    CURLOPT_URL => $url,\n  );\n  curl_setopt_array($chs[0], $options); //set the options\n  curl_setopt_array($chs[1], $options); //set the options\n  curl_setopt_array($chs[2], $options); //set the options\n  $mh = curl_multi_init();\n  // add handlers\n  curl_multi_add_handle($mh, $chs[0]);\n  curl_multi_add_handle($mh, $chs[1]);\n  curl_multi_add_handle($mh, $chs[2]);\n  $running=null;\n  //execute the handles\n  do {\n    curl_multi_exec($mh, $running);\n  } while ($running > 0);\n  $curl_content = '';\n  $curl_content .= curl_multi_getcontent($chs[0]);\n  $curl_content .= curl_multi_getcontent($chs[1]);\n  $curl_content .= curl_multi_getcontent($chs[2]);\n  //close the handles\n  curl_multi_remove_handle($mh, $chs[0]);\n  curl_multi_remove_handle($mh, $chs[1]);\n  curl_multi_remove_handle($mh, $chs[2]);\n  curl_multi_close($mh);\n  var_dump( $curl_content );\n?>")).toMatchSnapshot();
  });
});
