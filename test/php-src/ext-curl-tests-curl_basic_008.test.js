// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_basic_008.phpt
  it("Test curl_error() & curl_errno() function with problematic host", function () {
    expect(parser.parseCode("<?php\n$url = \"http://www.\".uniqid().\".\".uniqid();\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_URL, $url);\ncurl_exec($ch);\nvar_dump(curl_error($ch));\nvar_dump(curl_errno($ch));\ncurl_close($ch);\n?>")).toMatchSnapshot();
  });
});
