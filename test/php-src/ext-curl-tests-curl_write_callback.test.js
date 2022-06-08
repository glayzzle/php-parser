// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_write_callback.phpt
  it("Test curl option CURLOPT_WRITEFUNCTION", function () {
    expect(parser.parseCode("<?php\nfunction curl_callback($curl_handle, $received_data)\n{\n    echo $received_data;\n    return strlen($received_data);\n}\n$log_file = tempnam(sys_get_temp_dir(), 'php-curl-test');\n$fp = fopen($log_file, 'w+');\nfwrite($fp, \"test\");\nfclose($fp);\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_WRITEFUNCTION, 'curl_callback');\ncurl_setopt($ch, CURLOPT_URL, 'file://' . $log_file);\ncurl_exec($ch);\ncurl_close($ch);\n// cleanup\nunlink($log_file);\n?>")).toMatchSnapshot();
  });
});
