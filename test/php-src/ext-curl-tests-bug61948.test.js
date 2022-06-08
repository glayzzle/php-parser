// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug61948.phpt
  it("Bug #61948 (CURLOPT_COOKIEFILE '' raises open_basedir restriction)", function () {
    expect(parser.parseCode("<?php\n  $base_dir = __DIR__ . DIRECTORY_SEPARATOR . \"bug61948\";\n  mkdir($base_dir . DIRECTORY_SEPARATOR . \"foo\", 0755, true);\n  ini_set(\"open_basedir\", $base_dir);\n  $ch = curl_init();\n  var_dump(curl_setopt($ch, CURLOPT_COOKIEFILE, \"\"));\n  var_dump(curl_setopt($ch, CURLOPT_COOKIEFILE, \"$base_dir/foo\"));\n  var_dump(curl_setopt($ch, CURLOPT_COOKIEFILE, \"c:/xxx/bar\"));\n  curl_close($ch);\n?>")).toMatchSnapshot();
  });
});
