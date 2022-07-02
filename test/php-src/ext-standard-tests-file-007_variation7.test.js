// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/007_variation7.phpt
  it("Test fopen and fclose() functions - usage variations - \"x\" mode", function () {
    expect(parser.parseCode("<?php\n/* Test fopen() and fclose(): Opening the file in \"x\" mode,\n   checking for the file creation, write & read operations,\n   checking for the file pointer position,\n   checking for the warning msg when trying to open an existing file in \"x\" mode,\n   and fclose function\n*/\n$file_path = __DIR__;\n$string = \"abcdefghij\\nmnopqrst\\tuvwxyz\\n0123456789\";\n$file = $file_path.\"/007_variation7.tmp\";\necho \"*** Test fopen() & fclose() functions:  with 'x' mode ***\\n\";\n$file_handle = fopen($file, \"x\");  //opening the non-existing file in \"x\" mode, file will be created\nvar_dump($file_handle);  //Check for the content of handle\nvar_dump( get_resource_type($file_handle) );  //Check for the type of resource\nvar_dump( ftell($file_handle) );  //Initial file pointer position, expected at the beginning of the file\nvar_dump( fwrite($file_handle, $string) );  //Check for write operation; passes; expected:size of the $string\nvar_dump( ftell($file_handle) );  //File pointer position after write operation, expected at the end of the file\nrewind($file_handle);\nvar_dump( fread($file_handle, 100) );  //Check for read operation; fails; expected: false\nvar_dump( ftell($file_handle) );  //File pointer position after read operation, expected at the beginning of the file\nvar_dump( fclose($file_handle) );  //Check for close operation on the file handle\nvar_dump( get_resource_type($file_handle) );  //Check whether resource is lost after close operation\n$file_handle = fopen($file, \"x\");  //Opening the existing data file in 'x' mode to check for the warning message\necho \"*** Done ***\\n\";")).toMatchSnapshot();
  });
});
