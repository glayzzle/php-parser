// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_basic_022.phpt
  it("Test curl_getinfo() function with CURLINFO_COOKIELIST parameter", function () {
    expect(parser.parseCode("<?php\n$ch = curl_init();\ncurl_setopt($ch, CURLOPT_COOKIELIST, 'Set-Cookie: C1=v1; expires=Thu, 31-Dec-2037 23:59:59 GMT; path=/; domain=.php.net');\ncurl_setopt($ch, CURLOPT_COOKIELIST, 'Set-Cookie: C2=v2; expires=Thu, 31-Dec-2037 23:59:59 GMT; path=/; domain=.php.net');\nvar_dump(curl_getinfo($ch, CURLINFO_COOKIELIST));\n?>")).toMatchSnapshot();
  });
});
