// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug77711.phpt
  it("FR #77711 (CURLFile should support UNICODE filenames)", function () {
    expect(parser.parseCode("<?php\ninclude 'server.inc';\n$host = curl_cli_server_start();\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_SAFE_UPLOAD, 1);\ncurl_setopt($ch, CURLOPT_URL, \"{$host}/get.php?test=file\");\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n$filename = __DIR__ . '/АБВ.txt';\nfile_put_contents($filename, \"Test.\");\n$file = curl_file_create($filename);\n$params = array('file' => $file);\nvar_dump(curl_setopt($ch, CURLOPT_POSTFIELDS, $params));\nvar_dump(curl_exec($ch));\ncurl_close($ch);\n?>")).toMatchSnapshot();
  });
});
