// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_write_return.phpt
  it("Test curl option CURLOPT_RETURNTRANSFER", function () {
    expect(parser.parseCode("<?php\n$log_file = tempnam(sys_get_temp_dir(), 'php-curl-test');\n$fp = fopen($log_file, 'w+');\nfwrite($fp, \"test\");\nfclose($fp);\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\ncurl_setopt($ch, CURLOPT_URL, 'file://' . $log_file);\n$result = curl_exec($ch);\ncurl_close($ch);\necho $result;\n// cleanup\nunlink($log_file);\n?>")).toMatchSnapshot();
  });
});
