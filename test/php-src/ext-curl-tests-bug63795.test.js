// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug63795.phpt
  it("Bug #63795 (CURL >= 7.28.0 no longer support value 1 for CURLOPT_SSL_VERIFYHOST)", function () {
    expect(parser.parseCode("<?php\n$ch = curl_init();\nvar_dump(curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false));\n/* Case that should throw an error */\nvar_dump(curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, true));\nvar_dump(curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 0));\nvar_dump(curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 1));\nvar_dump(curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2));\ncurl_close($ch);\n?>")).toMatchSnapshot();
  });
});
