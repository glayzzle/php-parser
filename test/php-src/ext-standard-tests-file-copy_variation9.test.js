// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/copy_variation9.phpt
  it("Test copy() function: usage variations - destination file access perms", function () {
    expect(parser.parseCode("<?php\n/* Test copy(): Trying to copy source file to destination file with and without write permissions */\n$file_path = __DIR__;\necho \"*** Test copy() function: destination with/without write permissions ***\\n\";\n$src_file_name = $file_path.\"/copy_variation9.tmp\";\n$file_handle =  fopen($src_file_name, \"w\");\nfwrite($file_handle, str_repeat(\"Hello2world...\\n\", 100));\nfclose($file_handle);\n$dest_file_name =  $file_path.\"/copy_copy_variation9.tmp\";\necho \"\\n-- With write permissions --\\n\";\nvar_dump( file_exists($src_file_name) );\nvar_dump( copy($src_file_name, $dest_file_name) );\nvar_dump( file_exists($dest_file_name) );\nvar_dump( filesize($dest_file_name) );\necho \"\\n-- Without write permissions --\\n\";\nchmod($file_path.\"/copy_copy_variation9.tmp\", 0555);  //No write permissions\nvar_dump( file_exists($src_file_name) );\nvar_dump( copy($src_file_name, $dest_file_name) );\nvar_dump( file_exists($dest_file_name) );\nvar_dump( filesize($dest_file_name) );\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
