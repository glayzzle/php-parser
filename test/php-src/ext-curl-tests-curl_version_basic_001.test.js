// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_version_basic_001.phpt
  it("Test curl_version() basic functionality", function () {
    expect(parser.parseCode("<?php\n    $info_curl = curl_version();\n    var_dump($info_curl[\"version_number\"]);\n    var_dump($info_curl[\"age\"]);\n    var_dump($info_curl[\"features\"]);\n    var_dump($info_curl[\"ssl_version_number\"]);\n    var_dump($info_curl[\"version\"]);\n    var_dump($info_curl[\"host\"]);\n    var_dump($info_curl[\"ssl_version\"]);\n    var_dump($info_curl[\"libz_version\"]);\n    var_dump(array_key_exists(\"protocols\", $info_curl));\n?>")).toMatchSnapshot();
  });
});
