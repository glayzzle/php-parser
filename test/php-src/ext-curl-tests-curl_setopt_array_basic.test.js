// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_setopt_array_basic.phpt
  it("curl_setopt_array() function - tests setting multiple cURL options with curl_setopt_array()", function () {
    expect(parser.parseCode("<?php\n/*\n * Description:   Sets multiple options for a cURL session.\n * Source:        ext/curl/interface.c\n * Documentation: http://wiki.php.net/qa/temp/ext/curl\n */\n// Figure out what handler to use\ninclude 'server.inc';\n$host = curl_cli_server_start();\nif (!empty($host)) {\n    // Use the set Environment variable\n    $url = \"{$host}/get.inc?test=get\";\n} else {\n    // Create a temporary file for the test\n    $tempname = tempnam(sys_get_temp_dir(), 'CURL_HANDLE');\n    $url = 'file://'. $tempname;\n    // add the test data to the file\n    file_put_contents($tempname, \"Hello World!\\nHello World!\");\n}\n// Start the test\necho '== Starting test curl_setopt_array($ch, $options); ==' . \"\\n\";\n// curl handler\n$ch = curl_init();\n// options for the curl handler\n$options = array (\n    CURLOPT_URL => $url,\n    CURLOPT_RETURNTRANSFER => 1\n);\nob_start(); // start output buffering\ncurl_setopt_array($ch, $options);\n$returnContent = curl_exec($ch);\ncurl_close($ch);\nvar_dump($returnContent);\nisset($tempname) and is_file($tempname) and @unlink($tempname);\n?>")).toMatchSnapshot();
  });
});
