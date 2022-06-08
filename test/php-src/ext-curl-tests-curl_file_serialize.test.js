// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/curl/tests/curl_file_serialize.phpt
  it("CURL file uploading", function () {
    expect(parser.parseCode("<?php\n$file = new CURLFile(__DIR__ . '/curl_testdata1.txt');\nvar_dump(serialize($file));\n?>")).toMatchSnapshot();
  });
});
