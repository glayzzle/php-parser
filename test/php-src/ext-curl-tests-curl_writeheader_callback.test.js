// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_writeheader_callback.phpt
  it("Test curl option CURLOPT_HEADERFUNCTION", function () {
    expect(parser.parseCode("<?php\nfunction curl_header_callback($curl_handle, $data)\n{\n    if (strtolower(substr($data,0, 4)) == 'http')\n        echo $data;\n}\ninclude 'server.inc';\n$host = curl_cli_server_start();\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\ncurl_setopt($ch, CURLOPT_HEADERFUNCTION, 'curl_header_callback');\ncurl_setopt($ch, CURLOPT_URL, $host);\ncurl_exec($ch);\ncurl_close($ch);\n?>")).toMatchSnapshot();
  });
});
