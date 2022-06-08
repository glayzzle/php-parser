// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/stream_rfc2397_001.phpt
  it("Stream: RFC2397 getting the data", function () {
    expect(parser.parseCode("<?php\n$data = 'data://,hello world';\nvar_dump(file_get_contents($data));\n$file = fopen($data, 'r');\nunset($data);\nvar_dump(stream_get_contents($file));\n?>")).toMatchSnapshot();
  });
});
