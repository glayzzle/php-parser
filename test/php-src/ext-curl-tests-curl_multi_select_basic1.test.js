// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_multi_select_basic1.phpt
  it("Test curl_multi_select()", function () {
    expect(parser.parseCode("<?php\n//create the multiple cURL handle\n$mh = curl_multi_init();\necho curl_multi_select($mh).\"\\n\";\ncurl_multi_close($mh);\n?>")).toMatchSnapshot();
  });
});
