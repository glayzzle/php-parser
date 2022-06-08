// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_copy_handle_variation5.phpt
  it("curl_copy_handle() allows to post CURLFile multiple times if postfields change", function () {
    expect(parser.parseCode("<?php\ninclude 'server.inc';\n$host = curl_cli_server_start();\n$ch1 = curl_init();\ncurl_setopt($ch1, CURLOPT_SAFE_UPLOAD, 1);\ncurl_setopt($ch1, CURLOPT_URL, \"{$host}/get.php?test=file\");\ncurl_setopt($ch1, CURLOPT_RETURNTRANSFER, 1);\n$filename = __DIR__ . '/abc.txt';\nfile_put_contents($filename, \"Test.\");\n$file = curl_file_create($filename);\n$params = array('file' => $file);\nvar_dump(curl_setopt($ch1, CURLOPT_POSTFIELDS, $params));\n$ch2 = curl_copy_handle($ch1);\n$filename = __DIR__ . '/def.txt';\nfile_put_contents($filename, \"Other test.\");\n$file = curl_file_create($filename);\n$params = array('file' => $file);\nvar_dump(curl_setopt($ch2, CURLOPT_POSTFIELDS, $params));\n$ch3 = curl_copy_handle($ch2);\nvar_dump(curl_exec($ch1));\ncurl_close($ch1);\nvar_dump(curl_exec($ch2));\ncurl_close($ch2);\nvar_dump(curl_exec($ch3));\ncurl_close($ch3);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
