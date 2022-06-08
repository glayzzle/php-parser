// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_strerror_001.phpt
  it("curl_strerror basic test", function () {
    expect(parser.parseCode("<?php\nvar_dump(strtolower(curl_strerror(CURLE_OK)));\nvar_dump(strtolower(curl_strerror(CURLE_UNSUPPORTED_PROTOCOL)));\nvar_dump(strtolower(curl_strerror(-1)));\n?>")).toMatchSnapshot();
  });
});
