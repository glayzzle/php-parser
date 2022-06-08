// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_scheme_fopen_basic.phpt
  it("Test compress.zlib:// scheme with the fopen", function () {
    expect(parser.parseCode("<?php\n$inputFileName = __DIR__.\"/004.txt.gz\";\n$srcFile = \"compress.zlib://$inputFileName\";\n$h = fopen($srcFile, 'r');\nfpassthru($h);\nfclose($h);\n?>")).toMatchSnapshot();
  });
});
