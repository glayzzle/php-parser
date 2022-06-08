// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_basic_015.phpt
  it("Test curl_init() function with $url parameter defined", function () {
    expect(parser.parseCode("<?php\n  $url = 'http://www.example.com/';\n  $ch  = curl_init($url);\n  var_dump($url == curl_getinfo($ch, CURLINFO_EFFECTIVE_URL));\n?>")).toMatchSnapshot();
  });
});
