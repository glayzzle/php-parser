// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_share_close_basic001.phpt
  it("curl_share_close basic test", function () {
    expect(parser.parseCode("<?php\n$sh = curl_share_init();\n//Show that there's a curl_share object\nvar_dump($sh);\ncurl_share_close($sh);\nvar_dump($sh);\n?>")).toMatchSnapshot();
  });
});
