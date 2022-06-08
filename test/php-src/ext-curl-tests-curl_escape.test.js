// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_escape.phpt
  it("Test curl_escape and curl_unescape() functions", function () {
    expect(parser.parseCode("<?php\n$str = \"http://www.php.net/ ?!\";\n$a = curl_init();\n$escaped = curl_escape($a, $str);\n$original = curl_unescape($a, $escaped);\nvar_dump($escaped, $original);\nvar_dump(curl_unescape($a, 'a%00b'));\n?>")).toMatchSnapshot();
  });
});
