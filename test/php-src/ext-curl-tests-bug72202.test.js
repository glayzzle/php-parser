// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug72202.phpt
  it("Bug #72202 (curl_close doesn't close cURL handle)", function () {
    expect(parser.parseCode("<?php\n$a = fopen(__FILE__, \"r\");\n$b = $a;\nvar_dump($a, $b);\nfclose($a);\nvar_dump($a, $b);\nunset($a, $b);\n$a = curl_init();\n$b = $a;\nvar_dump($a, $b);\ncurl_close($a);\nvar_dump($a, $b);\nunset($a, $b);\n?>")).toMatchSnapshot();
  });
});
