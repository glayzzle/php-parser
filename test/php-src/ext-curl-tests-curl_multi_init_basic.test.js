// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_multi_init_basic.phpt
  it("Test curl_multi_init()", function () {
    expect(parser.parseCode("<?php\n// start testing\necho \"*** Testing curl_multi_init(void); ***\\n\";\n//create the multiple cURL handle\n$mh = curl_multi_init();\nvar_dump($mh);\ncurl_multi_close($mh);\nvar_dump($mh);\n?>")).toMatchSnapshot();
  });
});
