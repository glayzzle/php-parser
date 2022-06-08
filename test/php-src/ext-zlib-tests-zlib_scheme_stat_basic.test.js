// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_scheme_stat_basic.phpt
  it("Test compress.zlib:// scheme with the unlink function", function () {
    expect(parser.parseCode("<?php\n$inputFileName = __DIR__.\"/004.txt.gz\";\n$srcFile = \"compress.zlib://$inputFileName\";\nstat($srcFile);\nlstat($srcFile);\n?>")).toMatchSnapshot();
  });
});
