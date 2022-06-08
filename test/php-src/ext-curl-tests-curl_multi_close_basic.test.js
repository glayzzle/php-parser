// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_multi_close_basic.phpt
  it("curl_multi_close", function () {
    expect(parser.parseCode("<?php\n$ch = curl_multi_init();\ncurl_multi_close($ch);\nvar_dump($ch);\n?>")).toMatchSnapshot();
  });
});
