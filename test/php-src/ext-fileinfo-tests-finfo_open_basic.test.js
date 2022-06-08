// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/finfo_open_basic.phpt
  it("Test finfo_open() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n$magicFile = __DIR__ . DIRECTORY_SEPARATOR . 'magic';\necho \"*** Testing finfo_open() : basic functionality ***\\n\";\n// Calling finfo_open() with different options\nvar_dump( finfo_open( FILEINFO_MIME, $magicFile ) );\nvar_dump( finfo_open( FILEINFO_NONE, $magicFile ) );\nvar_dump( finfo_open( FILEINFO_SYMLINK, $magicFile ) );\n//var_dump( finfo_open( FILEINFO_COMPRESS, $magicFile ) );\nvar_dump( finfo_open( FILEINFO_DEVICES, $magicFile ) );\nvar_dump( finfo_open( FILEINFO_CONTINUE, $magicFile ) );\nvar_dump( finfo_open( FILEINFO_PRESERVE_ATIME, $magicFile ) );\nvar_dump( finfo_open( FILEINFO_RAW, $magicFile ) );\n// OO interface to finfo\nvar_dump( new finfo( FILEINFO_MIME, $magicFile ) );\nvar_dump( new finfo() );\n?>")).toMatchSnapshot();
  });
});
