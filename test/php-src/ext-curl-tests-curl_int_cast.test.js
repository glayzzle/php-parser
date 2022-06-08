// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_int_cast.phpt
  it("Casting CurlHandle to int returns object ID", function () {
    expect(parser.parseCode("<?php\n$handle1 = curl_init();\nvar_dump((int) $handle1);\n$handle2 = curl_init();\nvar_dump((int) $handle2);\n// NB: Unlike resource IDs, object IDs are reused.\nunset($handle2);\n$handle3 = curl_init();\nvar_dump((int) $handle3);\n// Also works for CurlMultiHandle.\n$handle4 = curl_multi_init();\nvar_dump((int) $handle4);\n?>")).toMatchSnapshot();
  });
});
