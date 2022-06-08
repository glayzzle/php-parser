// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug48514.phpt
  it("Bug #48514 (cURL extension uses same resource name for simple and multi APIs)", function () {
    expect(parser.parseCode("<?php\n$ch1 = curl_init();\nvar_dump($ch1);\nvar_dump($ch1::class);\n$ch2 = curl_multi_init();\nvar_dump($ch2);\nvar_dump($ch2::class);\n?>")).toMatchSnapshot();
  });
});
