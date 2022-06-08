// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_basic_007.phpt
  it("Test curl_error() & curl_errno() function without url", function () {
    expect(parser.parseCode("<?php\n//In January 2008 , level 7.18.0 of the curl lib, many of the messages changed.\n//The final crlf was removed. This test is coded to work with or without the crlf.\n$ch = curl_init();\ncurl_exec($ch);\nvar_dump(curl_error($ch));\nvar_dump(curl_errno($ch));\ncurl_close($ch);\n?>")).toMatchSnapshot();
  });
});
