// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_scheme_file_get_contents_basic.phpt
  it("Test compress.zlib:// scheme with the file_get_contents", function () {
    expect(parser.parseCode("<?php\n$inputFileName = __DIR__.\"/004.txt.gz\";\n$srcFile = \"compress.zlib://$inputFileName\";\n$contents = file_get_contents($srcFile);\necho $contents;\n?>")).toMatchSnapshot();
  });
});
