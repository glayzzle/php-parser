// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_copy_handle_variation4.phpt
  it("curl_copy_handle() allows to post CURLFile multiple times with curl_multi_exec()", function () {
    expect(parser.parseCode("<?php\ninclude 'server.inc';\n$host = curl_cli_server_start();\n$ch1 = curl_init();\ncurl_setopt($ch1, CURLOPT_SAFE_UPLOAD, 1);\ncurl_setopt($ch1, CURLOPT_URL, \"{$host}/get.php?test=file\");\n// curl_setopt($ch1, CURLOPT_RETURNTRANSFER, 1);\n$filename = __DIR__ . '/curl_copy_handle_variation4.txt';\nfile_put_contents($filename, \"Test.\");\n$file = curl_file_create($filename);\n$params = array('file' => $file);\nvar_dump(curl_setopt($ch1, CURLOPT_POSTFIELDS, $params));\n$ch2 = curl_copy_handle($ch1);\n$ch3 = curl_copy_handle($ch1);\n$mh = curl_multi_init();\ncurl_multi_add_handle($mh, $ch1);\ncurl_multi_add_handle($mh, $ch2);\ndo {\n    $status = curl_multi_exec($mh, $active);\n    if ($active) {\n        curl_multi_select($mh);\n    }\n} while ($active && $status == CURLM_OK);\ncurl_multi_remove_handle($mh, $ch1);\ncurl_multi_remove_handle($mh, $ch2);\ncurl_multi_remove_handle($mh, $ch3);\ncurl_multi_close($mh);\n?>\n===DONE===")).toMatchSnapshot();
  });
});
