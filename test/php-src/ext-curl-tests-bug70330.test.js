// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/bug70330.phpt
  it("Bug #70330 (Segmentation Fault with multiple \"curl_copy_handle\")", function () {
    expect(parser.parseCode("<?php\n$t2 = curl_init();\n$t3 = curl_copy_handle($t2);\n$t3 = curl_copy_handle($t2);\n$t4 = curl_init();\n$t3 = curl_copy_handle($t4);\n$t5 = curl_init();\n$t6 = curl_copy_handle($t5);\n?>\nokey")).toMatchSnapshot();
  });
});
