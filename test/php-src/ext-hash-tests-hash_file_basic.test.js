// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/hash/tests/hash_file_basic.phpt
  it("Hash: hash_file() function : basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"*** Testing hash_file() : basic functionality ***\\n\";\n// Set up file\n$filename = 'hash_file_basic_example.txt';\nfile_put_contents( $filename, 'The quick brown fox jumped over the lazy dog.' );\nvar_dump( hash_file( 'md5', $filename ) );\nvar_dump( hash_file( 'sha1', $filename ) );\nvar_dump( hash_file( 'sha256', $filename ) );\nvar_dump( hash_file( 'sha512', $filename ) );\nvar_dump( base64_encode( hash_file( 'md5', $filename, true ) ) );\n?>")).toMatchSnapshot();
  });
});
