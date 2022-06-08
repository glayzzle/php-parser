// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_copy_handle_basic.phpt
  it("Test curl_copy_handle() function with basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing curl_copy_handle(): basic ***\\n\";\n// create a new cURL resource\n$ch = curl_init();\n// set URL and other appropriate options\ncurl_setopt($ch, CURLOPT_URL, 'http://www.example.com/');\ncurl_setopt($ch, CURLOPT_HEADER, 0);\n// copy the handle\n$ch2 = curl_copy_handle($ch);\nvar_dump(curl_getinfo($ch) === curl_getinfo($ch2));\n?>")).toMatchSnapshot();
  });
});
