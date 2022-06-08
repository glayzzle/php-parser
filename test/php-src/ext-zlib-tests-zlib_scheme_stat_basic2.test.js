// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/zlib/tests/zlib_scheme_stat_basic2.phpt
  it("Test compress.zlib:// scheme with the unlink function", function () {
    expect(parser.parseCode("<?php\n$inputFileName = __DIR__.\"/004.txt.gz\";\n$srcFile = \"compress.zlib://$inputFileName\";\necho \"file_exists=\";\nvar_dump(file_exists($srcFile));\necho \"is_file=\";\nvar_dump(is_file($srcFile));\necho \"is_dir=\";\nvar_dump(is_dir($srcFile));\necho \"is_readable=\";\nvar_dump(is_readable($srcFile));\necho \"\\n\";\necho \"filesize=\";\nvar_dump(filesize($srcFile));\necho \"filetype=\";\nvar_dump(filetype($srcFile));\necho \"fileatime=\";\nvar_dump(fileatime($srcFile));\n?>")).toMatchSnapshot();
  });
});
