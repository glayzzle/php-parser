// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_write_stdout.phpt
  it("Test curl option CURLOPT_FILE with STDOUT handle", function () {
    expect(parser.parseCode("<?php\n$log_file = tempnam(sys_get_temp_dir(), 'php-curl-test');\n$fp = fopen($log_file, 'w+');\nfwrite($fp, \"test\");\nfclose($fp);\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_FILE, STDOUT);\ncurl_setopt($ch, CURLOPT_URL, 'file://' . $log_file);\ncurl_exec($ch);\ncurl_close($ch);\n// cleanup\nunlink($log_file);\n?>")).toMatchSnapshot();
  });
});
