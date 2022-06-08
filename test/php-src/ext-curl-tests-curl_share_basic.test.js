// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_share_basic.phpt
  it("Basic curl_share test", function () {
    expect(parser.parseCode("<?php\n$sh = curl_share_init();\n$ch1 = curl_init();\ncurl_setopt($ch1, CURLOPT_URL, 'file://' . __DIR__ . '/curl_testdata1.txt');\ncurl_setopt($ch1, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($ch1, CURLOPT_SHARE, $sh);\n$ch2 = curl_init();\ncurl_setopt($ch2, CURLOPT_URL, 'file://' . __DIR__ . '/curl_testdata2.txt');\ncurl_setopt($ch2, CURLOPT_RETURNTRANSFER, true);\ncurl_setopt($ch2, CURLOPT_SHARE, $sh);\n// Make sure nothing bad handles if the share handle is unset early.\nunset($sh);\nvar_dump(curl_exec($ch1));\nvar_dump(curl_exec($ch2));\n?>")).toMatchSnapshot();
  });
});
