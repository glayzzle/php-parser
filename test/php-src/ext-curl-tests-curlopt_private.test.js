// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curlopt_private.phpt
  it("CURLOPT_PRIVATE", function () {
    expect(parser.parseCode("<?php\n$curl = curl_init(\"foobar\");\n$obj = new stdClass;\ncurl_setopt($curl, CURLOPT_PRIVATE, $obj);\nvar_dump($obj === curl_getinfo($curl, CURLINFO_PRIVATE));\n$curl2 = curl_copy_handle($curl);\nvar_dump($obj === curl_getinfo($curl2, CURLINFO_PRIVATE));\n$obj2 = new stdClass;\ncurl_setopt($curl2, CURLOPT_PRIVATE, $obj2);\nvar_dump($obj === curl_getinfo($curl, CURLINFO_PRIVATE));\nvar_dump($obj2 === curl_getinfo($curl2, CURLINFO_PRIVATE));\n?>")).toMatchSnapshot();
  });
});
