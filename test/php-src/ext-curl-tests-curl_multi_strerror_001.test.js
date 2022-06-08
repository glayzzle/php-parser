// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_multi_strerror_001.phpt
  it("curl_multi_strerror basic test", function () {
    expect(parser.parseCode("<?php\nvar_dump(strtolower(curl_multi_strerror(CURLM_OK)));\nvar_dump(strtolower(curl_multi_strerror(CURLM_BAD_HANDLE)));\n?>")).toMatchSnapshot();
  });
});
