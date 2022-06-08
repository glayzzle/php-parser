// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/007_variation17.phpt
  it("Test fopen and fclose() functions - usage variations - \"rb\" mode", function () {
    expect(parser.parseCode("<?php\n/* Test fopen() and fclose(): Opening the file in \"rb\" mode,\n   checking for the file creation, write & read operations,\n   checking for the file pointer position,\n   and fclose function\n*/\n$file_path = __DIR__;\nrequire($file_path.\"/file.inc\");\ncreate_files($file_path, 1, \"text_with_new_line\", 0755, 20, \"w\", \"007_variation\", 17, \"bytes\");\n$file = $file_path.\"/007_variation17.tmp\";\n$string = \"abcdefghij\\nmnopqrst\\tuvwxyz\\n0123456789\";\necho \"*** Test fopen() & fclose() functions:  with 'rb' mode ***\\n\";\n$file_handle = fopen($file, \"rb\");  //opening the file in \"rb\" mode\nvar_dump($file_handle);  //Check for the content of handle\nvar_dump( get_resource_type($file_handle) );  //Check for the type of resource\nvar_dump( ftell($file_handle) );  //Initial position of file pointer\nvar_dump( fread($file_handle, 100) );  //Check for read operation\nvar_dump( fwrite($file_handle, $string) );  //Check for write operation; fails\nvar_dump( fclose($file_handle) );  //Check for close operation on the file handle\nvar_dump( get_resource_type($file_handle) );  //Check whether resource is lost after close operation\necho \"*** Done ***\\n\";")).toMatchSnapshot();
  });
});
