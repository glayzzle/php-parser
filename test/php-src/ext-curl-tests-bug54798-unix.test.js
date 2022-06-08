// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug54798-unix.phpt
  it("Bug #54798 (Segfault when CURLOPT_STDERR file pointer is closed before calling curl_exec)", function () {
    expect(parser.parseCode("<?php\nfunction checkForClosedFilePointer($host, $curl_option, $description) {\n    $fp = fopen(__DIR__ . '/bug54798.tmp', 'w+');\n    $ch = curl_init();\n    // we also need CURLOPT_VERBOSE to be set to test CURLOPT_STDERR properly\n    if (CURLOPT_STDERR == $curl_option) {\n        curl_setopt($ch, CURLOPT_VERBOSE, 1);\n    }\n    if (CURLOPT_INFILE == $curl_option) {\n        curl_setopt($ch, CURLOPT_UPLOAD, 1);\n    }\n    curl_setopt($ch, $curl_option, $fp);\n    curl_setopt($ch, CURLOPT_URL, $host);\n    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\n    fclose($fp); // <-- premature close of $fp caused a crash!\n    curl_exec($ch);\n    curl_close($ch);\n    echo \"Ok for $description\\n\";\n}\n$options_to_check = array(\n    \"CURLOPT_STDERR\",\n    \"CURLOPT_WRITEHEADER\",\n    \"CURLOPT_FILE\",\n    \"CURLOPT_INFILE\"\n);\ninclude 'server.inc';\n$host = curl_cli_server_start();\nforeach($options_to_check as $option) {\n    checkForClosedFilePointer($host, constant($option), $option);\n}\n?>")).toMatchSnapshot();
  });
});
