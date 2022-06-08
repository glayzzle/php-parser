// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_copy_handle_variation2.phpt
  it("Test curl_copy_handle() add options to the handles", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing curl_copy_handle(): add options after copy ***\\n\";\n// create a new cURL resource\n$ch = curl_init();\n// copy the handle\n$ch2 = curl_copy_handle($ch);\nvar_dump(curl_getinfo($ch) === curl_getinfo($ch2));\n// add some CURLOPT to the second handle\ncurl_setopt($ch2, CURLOPT_URL, 'http://www.example.com/');\nvar_dump(curl_getinfo($ch) === curl_getinfo($ch2));\n// add same CURLOPT to the first handle\ncurl_setopt($ch, CURLOPT_URL, 'http://www.example.com/');\nvar_dump(curl_getinfo($ch) === curl_getinfo($ch2));\n// change a CURLOPT in the second handle\ncurl_setopt($ch2, CURLOPT_URL, 'http://www.bar.com/');\nvar_dump(curl_getinfo($ch) === curl_getinfo($ch2));\n?>")).toMatchSnapshot();
  });
});
