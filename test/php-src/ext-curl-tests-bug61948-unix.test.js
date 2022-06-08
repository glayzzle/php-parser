// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug61948-unix.phpt
  it("Bug #61948 (CURLOPT_COOKIEFILE '' raises open_basedir restriction)", function () {
    expect(parser.parseCode("<?php\n  $ch = curl_init();\n  var_dump(curl_setopt($ch, CURLOPT_COOKIEFILE, \"\"));\n  var_dump(curl_setopt($ch, CURLOPT_COOKIEFILE, \"/tmp/foo\"));\n  var_dump(curl_setopt($ch, CURLOPT_COOKIEFILE, \"/xxx/bar\"));\n  curl_close($ch);\n?>")).toMatchSnapshot();
  });
});
