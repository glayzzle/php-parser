// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug48207.phpt
  it("Test curl_setopt() CURLOPT_FILE readonly file handle", function () {
    expect(parser.parseCode("<?php\n/*\n * Description       : Adds a file which stores the received data from curl_exec();\n * Source code       : ext/curl/multi.c\n * Test documentation: http://wiki.php.net/qa/temp/ext/curl\n */\n// Figure out what handler to use\ninclude 'server.inc';\n$host = curl_cli_server_start();\nif(!empty($host)) {\n    // Use the set Environment variable\n    $url = \"$host/get.inc?test=1\";\n} else {\n    // Create a temporary file for the test\n    $tempname = tempnam(sys_get_temp_dir(), 'CURL_HANDLE');\n    $url = 'file://'. $tempname;\n    // add the test data to the file\n    file_put_contents($tempname, \"Hello World!\\nHello World!\");\n}\n$tempfile\t= tempnam(sys_get_temp_dir(), 'CURL_FILE_HANDLE');\n$fp = fopen($tempfile, \"r\"); // Opening 'fubar' with the incorrect readonly flag\n$ch = curl_init($url);\ntry {\n    curl_setopt($ch, CURLOPT_FILE, $fp);\n} catch (ValueError $exception) {\n    echo $exception->getMessage() . \"\\n\";\n}\ncurl_exec($ch);\ncurl_close($ch);\nis_file($tempfile) and @unlink($tempfile);\nisset($tempname) and is_file($tempname) and @unlink($tempname);\n?>")).toMatchSnapshot();
  });
});
