// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/finfo_close_basic.phpt
  it("Test finfo_close() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing finfo_close() : basic functionality ***\\n\";\n$magicFile = __DIR__ . DIRECTORY_SEPARATOR . 'magic';\n$finfo = finfo_open( FILEINFO_MIME, $magicFile );\nvar_dump( $finfo );\n// Calling finfo_close() with all possible arguments\nvar_dump( finfo_close($finfo) );\n$finfo = new finfo( FILEINFO_MIME, $magicFile );\nvar_dump( $finfo );\nunset( $finfo );\n?>")).toMatchSnapshot();
  });
});
