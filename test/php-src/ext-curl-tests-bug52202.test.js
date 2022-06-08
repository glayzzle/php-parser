// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug52202.phpt
  it("Bug #52202 (CURLOPT_PRIVATE gets clobbered)", function () {
    expect(parser.parseCode("<?php\n$curl = curl_init(\"http://www.google.com\");\ncurl_setopt($curl, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($curl, CURLOPT_PRIVATE, \"123\");\ncurl_setopt($curl, CURLOPT_CONNECTTIMEOUT, 1);\ncurl_setopt($curl, CURLOPT_TIMEOUT, 1);\ncurl_exec($curl);\nvar_dump(curl_getinfo($curl, CURLINFO_PRIVATE));\n?>")).toMatchSnapshot();
  });
});
