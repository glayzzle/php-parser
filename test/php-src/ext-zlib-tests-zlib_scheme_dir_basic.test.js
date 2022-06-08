// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_scheme_dir_basic.phpt
  it("Test compress.zlib:// scheme with the directory functions", function () {
    expect(parser.parseCode("<?php\n$inputFileName = __DIR__.\"/dir.gz\";\n$srcFile = \"compress.zlib://$inputFileName\";\nvar_dump(mkdir($srcFile));\nvar_dump(is_dir($srcFile));\nvar_dump(opendir($srcFile));\nvar_dump(rmdir($srcFile));\n?>")).toMatchSnapshot();
  });
});
