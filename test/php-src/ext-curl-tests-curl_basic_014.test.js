// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_basic_014.phpt
  it("Test curl_init() function with basic functionality", function () {
    expect(parser.parseCode("<?php\n  $ch = curl_init();\n  var_dump($ch);\n?>")).toMatchSnapshot();
  });
});
