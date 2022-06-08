// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_close_basic.phpt
  it("curl_close", function () {
    expect(parser.parseCode("<?php\n$ch = curl_init();\ncurl_close($ch);\nvar_dump($ch);\n?>")).toMatchSnapshot();
  });
});
