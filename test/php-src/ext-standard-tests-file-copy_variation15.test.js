// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/copy_variation15.phpt
  it("Test copy() function: usage variations - destination dir access perms", function () {
    expect(parser.parseCode("<?php\n/* Test copy(): Trying to create a copy of file in a dir which doesn't have write permissions */\n$file_path = __DIR__;\necho \"*** Test copy() function: Trying to create a copy of file in a dir which doesn't have write permissions ***\";\n$file = $file_path.\"/copy_variation15.tmp\";\n$file_handle =  fopen($file, \"w\");\nfwrite($file_handle, str_repeat(\"Hello, world...\", 20));\nfclose($file_handle);\n$dir = $file_path.\"/copy_variation15\";\nmkdir($dir);\n$old_perms = fileperms($dir);\nchmod($dir, 0555);  //dir without write permissions\n$dest = $dir.\"/copy_copy_variation15.tmp\";\nvar_dump( copy($file, $dir.\"/copy_copy_variation15.tmp\") );\nvar_dump( file_exists($dir.\"/copy_copy_variation15_dir.tmp\") );\nvar_dump( filesize($file) );  //size of source\nchmod($dir, $old_perms);\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
