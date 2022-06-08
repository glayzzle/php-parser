// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_file_upload_stream.phpt
  it("CURL file uploading from stream", function () {
    expect(parser.parseCode("<?php\ninclude 'server.inc';\n$host = curl_cli_server_start();\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_SAFE_UPLOAD, 1);\ncurl_setopt($ch, CURLOPT_URL, \"{$host}/get.inc?test=file\");\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n$file = curl_file_create('data://text/plain;base64,SSBsb3ZlIFBIUAo=', 'text/plain', 'i-love-php');\n$params = array('file' => $file);\nvar_dump(curl_setopt($ch, CURLOPT_POSTFIELDS, $params));\nvar_dump(curl_exec($ch));\ncurl_close($ch);\n?>")).toMatchSnapshot();
  });
});
