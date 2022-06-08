// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug71144.phpt
  it("Bug #71144 (Sementation fault when using cURL with ZTS)", function () {
    expect(parser.parseCode("<?php\n$ch = curl_init();\nvar_dump(curl_setopt($ch, CURLOPT_DNS_USE_GLOBAL_CACHE, 1));\n?>")).toMatchSnapshot();
  });
});
