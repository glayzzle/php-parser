// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/finfo_set_flags_basic.phpt
  it("Test finfo_set_flags() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n$magicFile = __DIR__ . DIRECTORY_SEPARATOR . 'magic';\n$finfo = finfo_open( FILEINFO_MIME, $magicFile );\necho \"*** Testing finfo_set_flags() : basic functionality ***\\n\";\nvar_dump( finfo_set_flags( $finfo, FILEINFO_NONE ) );\nvar_dump( finfo_set_flags( $finfo, FILEINFO_SYMLINK ) );\nfinfo_close( $finfo );\n// OO way\n$finfo = new finfo( FILEINFO_NONE, $magicFile );\nvar_dump( $finfo->set_flags( FILEINFO_MIME ) );\n?>")).toMatchSnapshot();
  });
});
