// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/copy_variation17.phpt
  it("Test copy() function: usage variations - wildcard chars in source", function () {
    expect(parser.parseCode("<?php\n/* Test copy(): Trying to copy the source file which is given with the combination of wild-card chars */\n$file_path = __DIR__;\necho \"*** Test copy() function: With source file names containing wild-card chars ***\\n\";\n$src_file = $file_path.\"/copy_variation17.tmp\";\n$file_handle =  fopen($src_file, \"w\");\nfwrite($file_handle, str_repeat(\"Hello2world...\\n\", 100));\nfclose($file_handle);\n$dir = $file_path.\"/copy_variation17\";\nmkdir($dir);\n$src_file_names = array(\n  $file_path.\"/copy_variation17.tmp\",  //without wild-card char\n  $file_path.\"/copy*17.tmp\",\n  $file_path.\"/*_variation17.tmp\",\n  $file_path.\"/copy_variation*.tmp\",\n  $file_path.\"/*.tmp\"\n);\n$dest_file_name = $dir.\"/copy_copy_variation17.tmp\";\n$count = 1;\nforeach($src_file_names as $src_file_name) {\n  var_dump( copy($src_file_name, $dest_file_name) );\n  var_dump( file_exists($dest_file_name) );\n  if( file_exists($dest_file_name) ) {\n  var_dump( filesize($dest_file_name) );  //size of destination\n  unlink($dest_file_name);\n  }\n  $count++;\n}\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
