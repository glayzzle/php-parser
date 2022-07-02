// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/copy_variation11.phpt
  it("Test copy() function: usage variations - existing dir as destination", function () {
    expect(parser.parseCode("<?php\n/* Test copy(): Trying to copy the file to a destination, where destination is an existing dir */\n$file_path = __DIR__;\necho \"*** Test copy() function: Trying to create a copy of source file as a dir ***\\n\";\n$file = $file_path.\"/copy_variation11.tmp\";\n$file_handle =  fopen($file, \"w\");\nfwrite($file_handle, str_repeat(\"Hello, world...\", 20));\nfclose($file_handle);\n$dir = $file_path.\"/copy_variation11\";\nmkdir($dir);\necho \"Size of source before copy operation => \";\nvar_dump( filesize($file) );  //size of source before copy\nclearstatcache();\necho \"Size of destination before copy operation => \";\nvar_dump( filesize($dir) );  //size of destination before copy\nclearstatcache();\necho \"\\n-- Now applying copy() operation --\\n\";\nvar_dump( copy($file, $dir) );  //expected: bool(false)\nvar_dump( file_exists($file) );  //expected: bool(true)\nvar_dump( file_exists($dir) );  //expected: bool(true)\nvar_dump( is_file($file) );  //expected: bool(true)\nvar_dump( is_dir($file) );  //expected: bool(false)\nvar_dump( is_file($dir) ); //expected: bool(false)\nvar_dump( is_dir($dir) );  //expected: bool(true)\nvar_dump( filesize($file) );   //size of source after copy\nvar_dump( filesize($dir) );   //size of destination after copy\necho \"*** Done ***\\n\";\n?>")).toMatchSnapshot();
  });
});
