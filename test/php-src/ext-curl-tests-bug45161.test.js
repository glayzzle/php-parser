// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug45161.phpt
  it("Bug #45161 (Reusing a curl handle leaks memory)", function () {
    expect(parser.parseCode("<?php\ninclude 'server.inc';\n$host = curl_cli_server_start();\n// Fill memory for test\n$ch = curl_init();\n$fp = fopen(PHP_OS_FAMILY === 'Windows' ? 'nul' : '/dev/null', 'w');\n/*\n$i = $start = $end = 100000.00;\nfor ($i = 0; $i < 100; $i++) {\n    curl_setopt($ch, CURLOPT_URL, 'http://127.0.0.1:9/');\n    curl_setopt($ch, CURLOPT_FILE, $fp);\n    curl_exec($ch);\n}\n*/\n// Start actual test\n$start = memory_get_usage() + 1024;\nfor($i = 0; $i < 1024; $i++) {\n    curl_setopt($ch, CURLOPT_URL, \"{$host}/get.inc\");\n    curl_setopt($ch, CURLOPT_FILE, $fp);\n    curl_exec($ch);\n}\nif ($start < memory_get_usage()) {\n    echo 'FAIL';\n} else {\n    echo 'PASS';\n}\necho \"\\n\";\nfclose($fp);\nunset($fp);\n?>")).toMatchSnapshot();
  });
});
