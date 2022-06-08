// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/lchown_error.phpt
  it("Test lchown() function : error functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing lchown() : error functionality ***\\n\";\n// Set up\n$filename = __DIR__ . DIRECTORY_SEPARATOR . 'lchown.txt';\ntouch( $filename );\n$uid = posix_getuid();\n// Non-existent filename\nvar_dump( lchown( 'foobar_lchown.txt', $uid ) );\n// Bad user\nvar_dump( lchown( $filename, -5 ) );\n?>")).toMatchSnapshot();
  });
});
