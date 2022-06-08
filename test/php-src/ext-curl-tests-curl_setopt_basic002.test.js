// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_setopt_basic002.phpt
  it("curl_setopt basic tests with CURLOPT_STDERR.", function () {
    expect(parser.parseCode("<?php\ninclude 'server.inc';\n$host = curl_cli_server_start();\n// start testing\necho \"*** Testing curl_setopt with CURLOPT_STDERR\\n\";\n$temp_file = tempnam(sys_get_temp_dir(), 'CURL_STDERR');\n$handle = fopen($temp_file, 'w');\n$url = \"{$host}/\";\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_VERBOSE, 1);\ncurl_setopt($ch, CURLOPT_STDERR, $handle);\n$curl_content = curl_exec($ch);\nfclose($handle);\nunset($handle);\nvar_dump(preg_replace('/[\\r\\n]/', ' ', file_get_contents($temp_file)));\n@unlink($temp_file);\nob_start(); // start output buffering\n$handle = fopen($temp_file, 'w');\ncurl_setopt($ch, CURLOPT_URL, $url); //set the url we want to use\ncurl_setopt($ch, CURLOPT_STDERR, $handle);\n$data = curl_exec($ch);\nob_end_clean();\nfclose($handle);\nunset($handle);\nvar_dump(preg_replace('/[\\r\\n]/', ' ', file_get_contents($temp_file)));\n@unlink($temp_file);\ncurl_close($ch);\n?>")).toMatchSnapshot();
  });
});
