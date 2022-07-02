// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/007_variation18.phpt
  it("Test fopen and fclose() functions - usage variations - \"r+b\" mode", function () {
    expect(parser.parseCode("<?php\n/* Test fopen() and fclose(): Opening the file in \"r+b\" mode,\n   checking for the file creation, write & read operations,\n   checking for the file pointer position,\n   and fclose function\n*/\n$file_path = __DIR__;\nrequire($file_path.\"/file.inc\");\ncreate_files($file_path, 1, \"text_with_new_line\", 0755, 20, \"w\", \"007_variation\", 18, \"bytes\");\n$file = $file_path.\"/007_variation18.tmp\";\n$string = \"abcdefghij\\nmnopqrst\\tuvwxyz\\n0123456789\";\necho \"*** Test fopen() & fclose() functions:  with 'r+b' mode ***\\n\";\n$file_handle = fopen($file, \"r+b\");  //opening the file in \"r+b\" mode\nvar_dump($file_handle);  //Check for the content of handle\nvar_dump( get_resource_type($file_handle) );  //Check for the type of resource\nvar_dump( ftell($file_handle) );  //Initial file pointer position, expected at the beginning of the file\nvar_dump( fread($file_handle, 100) );  //Check for read operation\nvar_dump( ftell($file_handle) );  //File pointer position after read operation, expected at the end of the file\nvar_dump( fwrite($file_handle, $string) );  //Check for write operation; passes; expected:size of the $string\nvar_dump( ftell($file_handle) );  //File pointer position after write operation, expected at the end of the file\nvar_dump( fclose($file_handle) );  //Check for close operation on the file handle\nvar_dump( get_resource_type($file_handle) );  //Check whether resource is lost after close operation\necho \"*** Done ***\\n\";")).toMatchSnapshot();
  });
});
