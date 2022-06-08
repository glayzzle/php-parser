// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_error_basic.phpt
  it("curl_error() function - basic test for curl_error using a fake url", function () {
    expect(parser.parseCode("<?php\n/*\n * Description:   Returns a clear text error message for the last cURL operation.\n * Source:        ext/curl/interface.c\n * Documentation: http://wiki.php.net/qa/temp/ext/curl\n */\n// Fake URL to trigger an error\n$url = \"fakeURL\";\necho \"== Testing curl_error with a fake URL ==\\n\";\n// cURL handler\n$ch = curl_init($url);\ncurl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);\ncurl_exec($ch);\nvar_dump(curl_error($ch));\ncurl_close($ch);\n?>")).toMatchSnapshot();
  });
});
