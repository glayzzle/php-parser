// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fgetc_variation1.phpt
  it("Test fgetc() function : usage variations - read when file pointer at EOF", function () {
    expect(parser.parseCode("<?php\n// include the header for common test function\ninclude (\"file.inc\");\necho \"*** Testing fgetc() : usage variations ***\\n\";\necho \"-- Testing fgetc() with file whose file pointer is pointing to EOF --\\n\";\n// create a file\ncreate_files(__DIR__, 1, \"text_with_new_line\", 0755, 1, \"w\", \"fgetc_variation\");\n$filename = __DIR__.\"/fgetc_variation1.tmp\";\n// loop to check the file opened in different read modes\n$file_modes = array(\"r\", \"rb\", \"rt\", \"r+\", \"r+b\", \"r+t\");\n$loop_counter =0;\nfor(; $loop_counter < count($file_modes); $loop_counter++) {\n  // print the hearder\n  echo \"-- File opened in mode : $file_modes[$loop_counter] --\\n\";\n  // open the file\n  $file_handle = fopen ($filename, $file_modes[$loop_counter]);\n  if (!$file_handle) {\n    echo \"Error: failed to open file $filename! \\n\";\n    exit();\n  }\n  // seek to end of the file and try fgetc()\n  var_dump( fseek($file_handle, 0, SEEK_END) ); // set file pointer to eof\n  var_dump( feof($file_handle) );  // expected false\n  var_dump( ftell($file_handle) );  // ensure that file pointer is at eof\n  var_dump( fgetc($file_handle) ); // try n read a char, none expected\n  var_dump( feof($file_handle) ); // ensure that file pointer is at eof\n  var_dump( ftell($file_handle) ); // file pointer position\n  // close the file handle\n  fclose($file_handle);\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
