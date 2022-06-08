// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lchown_basic.phpt
  it("Test lchown() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing lchown() : basic functionality ***\\n\";\n$filename = __DIR__ . DIRECTORY_SEPARATOR . 'lchown_basic.txt';\n$symlink = __DIR__ . DIRECTORY_SEPARATOR . 'lchown_basic_symlink.txt';\n$uid = posix_getuid();\nvar_dump( touch( $filename ) );\nvar_dump( symlink( $filename, $symlink ) );\nvar_dump( lchown( $filename, $uid ) );\nvar_dump( fileowner( $symlink ) === $uid );\n?>")).toMatchSnapshot();
  });
});
