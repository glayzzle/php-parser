// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_file_deleted_before_curl_close.phpt
  it("Memory corruption error if fp of just created file is closed before curl_close.", function () {
    expect(parser.parseCode("<?php\ninclude 'server.inc';\n$host = curl_cli_server_start();\n$ch = curl_init($host);\n$temp_file = __DIR__ . '/curl_file_deleted_before_curl_close.tmp';\nif (file_exists($temp_file)) {\n    unlink($temp_file); // file should not exist before test\n}\n$handle = fopen($temp_file, 'w');\ncurl_setopt($ch, CURLOPT_STDERR, $handle);\ncurl_setopt($ch, CURLOPT_VERBOSE, 1);\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\ncurl_exec($ch);\nfclose($handle); // causes glibc memory error\n//unlink($temp_file); // uncomment to test segfault (file not found on iowrite.c)\ncurl_close($ch);\necho \"Closed correctly\\n\";\n?>")).toMatchSnapshot();
  });
});
