// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_scheme_fopen_variation1.phpt
  it("Test compress.zlib:// scheme with the fopen on a file scheme", function () {
    expect(parser.parseCode("<?php\n$inputFileName = __DIR__.\"/004.txt.gz\";\n$srcFile = \"file://$inputFileName\";\n$compressedFile = \"compress.zlib://$srcFile\";\necho \"file=$compressedFile\\n\\n\";\n$h = fopen($compressedFile, 'r');\nfpassthru($h);\nfclose($h);\n?>")).toMatchSnapshot();
  });
});
