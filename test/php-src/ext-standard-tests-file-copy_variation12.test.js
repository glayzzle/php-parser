// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/copy_variation12.phpt
  it("Test copy() function: usage variations - dir as source (Bug #42111)", function () {
    expect(parser.parseCode("<?php\n/* Test copy(): Trying to create a copy of an existing dir */\n$file_path = __DIR__;\necho \"*** Test copy() function: Trying to create a copy of an existing dir ***\\n\";\n$src_dir = $file_path.\"/copy_variation12\";\nmkdir($src_dir);\n$dest = $file_path.\"/copy_copy_variation12\";\nvar_dump( copy($src_dir, $dest) );\nvar_dump( file_exists($dest) );\nvar_dump( filesize($src_dir) );\nvar_dump( filesize($dest) );\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
