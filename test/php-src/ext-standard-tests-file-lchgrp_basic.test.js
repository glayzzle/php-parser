// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lchgrp_basic.phpt
  it("Test lchgrp() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . DIRECTORY_SEPARATOR . 'lchgrp.txt';\n$symlink = __DIR__ . DIRECTORY_SEPARATOR . 'symlink.txt';\n$gid = posix_getgid();\nvar_dump( touch( $filename ) );\nvar_dump( symlink( $filename, $symlink ) );\nvar_dump( lchgrp( $filename, $gid ) );\nvar_dump( filegroup( $symlink ) === $gid );\n?>")).toMatchSnapshot();
  });
});
