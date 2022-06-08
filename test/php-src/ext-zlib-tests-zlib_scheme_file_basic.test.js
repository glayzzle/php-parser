// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_scheme_file_basic.phpt
  it("Test compress.zlib:// scheme with the file", function () {
    expect(parser.parseCode("<?php\n$inputFileName = __DIR__.\"/004.txt.gz\";\n$srcFile = \"compress.zlib://$inputFileName\";\n$contents = file($srcFile);\nvar_dump($contents);\n?>")).toMatchSnapshot();
  });
});
