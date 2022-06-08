// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug27023.phpt
  it("Bug #27023 (CURLOPT_POSTFIELDS does not parse content types for files)", function () {
    expect(parser.parseCode("<?php\ninclude 'server.inc';\n$host = curl_cli_server_start();\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_SAFE_UPLOAD, 1);\ncurl_setopt($ch, CURLOPT_URL, \"{$host}/get.inc?test=file\");\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n$file = curl_file_create(__DIR__ . '/curl_testdata1.txt');\n$params = array('file' => $file);\ncurl_setopt($ch, CURLOPT_POSTFIELDS, $params);\nvar_dump(curl_exec($ch));\n$file = curl_file_create(__DIR__ . '/curl_testdata1.txt', \"text/plain\");\n$params = array('file' => $file);\ncurl_setopt($ch, CURLOPT_POSTFIELDS, $params);\nvar_dump(curl_exec($ch));\n$file = curl_file_create(__DIR__ . '/curl_testdata1.txt', null, \"foo.txt\");\n$params = array('file' => $file);\ncurl_setopt($ch, CURLOPT_POSTFIELDS, $params);\nvar_dump(curl_exec($ch));\n$file = curl_file_create(__DIR__ . '/curl_testdata1.txt', \"text/plain\", \"foo.txt\");\n$params = array('file' => $file);\ncurl_setopt($ch, CURLOPT_POSTFIELDS, $params);\nvar_dump(curl_exec($ch));\ncurl_close($ch);\n?>")).toMatchSnapshot();
  });
});
