// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug69316.phpt
  it("Bug #69316: Use-after-free in php_curl related to CURLOPT_FILE/_INFILE/_WRITEHEADER", function () {
    expect(parser.parseCode("<?php\n  function hdr_callback($ch, $data) {\n      // close the stream, causing the FILE structure to be free()'d\n      if($GLOBALS['f_file']) {\n          fclose($GLOBALS['f_file']); $GLOBALS['f_file'] = 0;\n          // cause an allocation of approx the same size as a FILE structure, size varies a bit depending on platform/libc\n          $FILE_size = (PHP_INT_SIZE == 4 ? 0x160 : 0x238);\n          curl_setopt($ch, CURLOPT_COOKIE, str_repeat(\"a\", $FILE_size - 1));\n      }\n      return strlen($data);\n  }\n  include 'server.inc';\n  $host = curl_cli_server_start();\n  $temp_file = __DIR__ . '/body.tmp';\n  $url = \"{$host}/get.inc?test=getpost\";\n  $ch = curl_init();\n  $f_file = fopen($temp_file, \"w\") or die(\"failed to open file\\n\");\n  curl_setopt($ch, CURLOPT_BUFFERSIZE, 10);\n  curl_setopt($ch, CURLOPT_HEADERFUNCTION, \"hdr_callback\");\n  curl_setopt($ch, CURLOPT_FILE, $f_file);\n  curl_setopt($ch, CURLOPT_URL, $url);\n  curl_exec($ch);\n  curl_close($ch);\n?>")).toMatchSnapshot();
  });
});
