// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/copy_variation13.phpt
  it("Test copy() function: usage variations - src as dir and dest as an existing file(Bug #42243)", function () {
    expect(parser.parseCode("<?php\n/* Test copy(): Trying to copy dir to an existing file */\necho \"*** Test copy() function: Trying to copy dir to file ***\\n\";\n$file_path = __DIR__;\n$file = $file_path.\"/copy_variation13_dir.tmp\";\nfclose(fopen($file, \"w\"));\n$dir = $file_path.\"/copy_variation13\";\nmkdir($dir);\necho \"*** Testing copy() in copying dir to file ***\\n\";\nvar_dump( copy($dir, $file) );\nvar_dump( file_exists($file) );\nvar_dump( file_exists($dir) );\nvar_dump( is_file($dir) );\nvar_dump( is_dir($dir) );\nvar_dump( is_file($file) );\nvar_dump( is_dir($file) );\nvar_dump( filesize($file) );\nvar_dump( filesize($dir) );\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
