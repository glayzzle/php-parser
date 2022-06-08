// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/finfo_open_variation1.phpt
  it("Test finfo_open() function : variations in opening", function () {
    expect(parser.parseCode("<?php\n$magicFile = __DIR__ . DIRECTORY_SEPARATOR . 'magic';\necho \"*** Testing finfo_open() : variations in opening ***\\n\";\n// Calling finfo_open() with different options\nvar_dump( finfo_open( FILEINFO_MIME | FILEINFO_SYMLINK, $magicFile ) );\n//var_dump( finfo_open( FILEINFO_COMPRESS | FILEINFO_PRESERVE_ATIME, $magicFile ) );\nvar_dump( finfo_open( FILEINFO_DEVICES | FILEINFO_RAW, $magicFile ) );\n?>")).toMatchSnapshot();
  });
});
