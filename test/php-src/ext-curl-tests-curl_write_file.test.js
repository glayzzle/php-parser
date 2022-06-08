// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_write_file.phpt
  it("Test curl option CURLOPT_FILE", function () {
    expect(parser.parseCode("<?php\n$test_file = tempnam(sys_get_temp_dir(), 'php-curl-test');\n$log_file = tempnam(sys_get_temp_dir(), 'php-curl-test');\n$fp = fopen($log_file, 'w+');\nfwrite($fp, \"test\");\nfclose($fp);\n$testfile_fp = fopen($test_file, 'w+');\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_FILE, $testfile_fp);\ncurl_setopt($ch, CURLOPT_URL, 'file://' . $log_file);\ncurl_exec($ch);\ncurl_close($ch);\nfclose($testfile_fp);\necho file_get_contents($test_file);\n// cleanup\nunlink($test_file);\nunlink($log_file);\n?>")).toMatchSnapshot();
  });
});
