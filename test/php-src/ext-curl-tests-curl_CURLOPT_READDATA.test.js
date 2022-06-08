// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_CURLOPT_READDATA.phpt
  it("Test CURLOPT_READDATA without a callback function", function () {
    expect(parser.parseCode("<?php\ninclude 'server.inc';\n$host = curl_cli_server_start();\n// The URL to POST to\n$url = $host . '/get.inc?test=post';\n// Create a temporary file to read the data from\n$tempname = tempnam(sys_get_temp_dir(), 'CURL_DATA');\n$datalen = file_put_contents($tempname, \"hello=world&smurf=blue\");\nob_start();\n$ch = curl_init($url);\ncurl_setopt($ch, CURLOPT_URL, $url);\ncurl_setopt($ch, CURLOPT_POST, true);\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($ch, CURLOPT_READDATA, fopen($tempname, 'rb'));\ncurl_setopt($ch, CURLOPT_HTTPHEADER, array('Expect:', \"Content-Length: {$datalen}\"));\nif (false === $response = curl_exec($ch)) {\n    echo 'Error #' . curl_errno($ch) . ': ' . curl_error($ch);\n} else {\n    echo $response;\n}\ncurl_close($ch);\n// Clean the temporary file\n@unlink($tempname);\n?>")).toMatchSnapshot();
  });
});
