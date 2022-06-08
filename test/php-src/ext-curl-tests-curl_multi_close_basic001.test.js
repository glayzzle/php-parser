// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_multi_close_basic001.phpt
  it("curl_multi_close return false when supplied resource not valid cURL multi handle", function () {
    expect(parser.parseCode("<?php\n$cmh = curl_multi_init();\nvar_dump($cmh);\n$multi_close_result = curl_multi_close($cmh);\nvar_dump($multi_close_result);\nvar_dump($cmh);\ncurl_multi_close($cmh);\n?>")).toMatchSnapshot();
  });
});
