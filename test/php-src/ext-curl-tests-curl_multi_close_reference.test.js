// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_multi_close_reference.phpt
  it("curl_multi_close closed by cleanup functions", function () {
    expect(parser.parseCode("<?php\n$mh = curl_multi_init();\n$array = array($mh);\n$array[] = &$array;\ncurl_multi_add_handle($mh, curl_init());\ncurl_multi_add_handle($mh, curl_init());\ncurl_multi_add_handle($mh, curl_init());\ncurl_multi_add_handle($mh, curl_init());\necho \"okey\";\n?>")).toMatchSnapshot();
  });
});
