// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/007_variation13.phpt
  it("Test fopen and fclose() functions - usage variations - \"at\" mode", function () {
    expect(parser.parseCode("<?php\n/* Test fopen() and fclose(): Opening the file in \"at\" mode,\n   checking for the file creation, write & read operations,\n   checking for the file pointer position,\n   and fclose function\n*/\n$file_path = __DIR__;\nrequire($file_path.\"/file.inc\");\ncreate_files($file_path, 1, \"text_with_new_line\", 0755, 20, \"w\", \"007_variation\", 13, \"bytes\");\n$file = $file_path.\"/007_variation13.tmp\";\n$string = \"abcdefghij\\nmnopqrst\\tuvwxyz\\n0123456789\";\necho \"*** Test fopen() & fclose() functions:  with 'at' mode ***\\n\";\n$file_handle = fopen($file, \"at\");  //opening the file \"at\" mode\nvar_dump($file_handle);  //Check for the content of handle\nvar_dump( get_resource_type($file_handle) );  //Check for the type of resource\nvar_dump( fwrite($file_handle, $string) );  //Check for write operation; passes; expected:size of the $string\nrewind($file_handle);\nvar_dump( fread($file_handle, 100) );  //Check for read operation; fails; expected: false\nvar_dump( ftell($file_handle) );  //File pointer position after read operation, expected at the end of the file\nvar_dump( fclose($file_handle) );  //Check for close operation on the file handle\nvar_dump( get_resource_type($file_handle) );  //Check whether resource is lost after close operation\nvar_dump( filesize($file) ); //Check that data hasn't over written; Expected: Size of (initial data + newly added data)\nunlink($file);  //Deleting the file\nfclose( fopen($file, \"at\") );  //Opening the non-existing file in \"at\" mode, which will be created\nvar_dump( file_exists($file) );  //Check for the existence of file\necho \"*** Done ***\\n\";")).toMatchSnapshot();
  });
});
