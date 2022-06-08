// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_scheme_rename_basic.phpt
  it("Test compress.zlib:// scheme with the unlink function", function () {
    expect(parser.parseCode("<?php\n$inputFileName = __DIR__.\"/004.txt.gz\";\n$srcFile = \"compress.zlib://$inputFileName\";\nrename($srcFile, 'something.tmp');\nvar_dump(file_exists($inputFileName));\n?>")).toMatchSnapshot();
  });
});
