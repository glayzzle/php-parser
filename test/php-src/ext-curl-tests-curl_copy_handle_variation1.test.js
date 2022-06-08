// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_copy_handle_variation1.phpt
  it("Test curl_copy_handle() change options in one handle", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing curl_copy_handle(): basic ***\\n\";\n// create a new cURL resource\n$ch = curl_init();\n// set URL and other appropriate options\ncurl_setopt($ch, CURLOPT_URL, 'http://www.example.com/');\n// copy the handle\n$ch2 = curl_copy_handle($ch);\n// change the CURLOPT_URL for the second handle\ncurl_setopt($ch2, CURLOPT_URL, 'http://www.bar.com/');\nvar_dump(curl_getinfo($ch) === curl_getinfo($ch2));\n?>")).toMatchSnapshot();
  });
});
