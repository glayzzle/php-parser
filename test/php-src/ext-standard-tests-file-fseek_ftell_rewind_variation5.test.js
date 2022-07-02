// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fseek_ftell_rewind_variation5.phpt
  it("Test fseek(), ftell() & rewind() functions : usage variations - all r & a modes, SEEK_CUR", function () {
    expect(parser.parseCode("<?php\n// include the file.inc for common functions for test\ninclude (\"file.inc\");\n/* Testing fseek(),ftell(),rewind() functions\n     1. All read and append modes\n     2. Testing fseek() with whence = SEEK_CUR\n*/\necho \"*** Testing fseek(), ftell(), rewind() : whence = SEEK_CUR & all r and a modes ***\\n\";\n$file_modes = array( \"r\",\"rb\",\"rt\",\"r+\",\"r+b\",\"r+t\",\n                     \"a\",\"ab\",\"at\",\"a+\",\"a+b\",\"a+t\");\n$file_content_types = array( \"text_with_new_line\",\"alphanumeric\");\n$offset = array(-1, 0, 1, 512, 600);// different offsets\n$filename = __DIR__.\"/fseek_ftell_rewind_variation5.tmp\"; // this is name of the file created by create_files()\n/* open the file using $files_modes and perform fseek(),ftell() and rewind() on it */\nforeach($file_content_types as $file_content_type){\n  echo \"-- File having data of type \". $file_content_type .\" --\\n\";\n  foreach($file_modes as $file_mode) {\n    echo \"-- File opened in mode \".$file_mode.\" --\\n\";\n    create_files ( __DIR__, 1, $file_content_type, 0755, 512, \"w\", \"fseek_ftell_rewind_variation\"\n                      ,5,\"bytes\",\".tmp\"); //create a file with 512 bytes size\n    $file_handle = fopen($filename, $file_mode);\n    if (!$file_handle) {\n      echo \"Error: failed to fopen() file: $filename!\";\n      exit();\n    }\n    rewind($file_handle);\n    foreach($offset as $count){\n      var_dump( fseek($file_handle,$count,SEEK_CUR) );\n      var_dump( ftell($file_handle) ); // confirm the file pointer position\n      var_dump( feof($file_handle) ); //ensure that file pointer is not at end\n    } //end of offset loop\n    //close the file and check the size\n    fclose($file_handle);\n    var_dump( filesize($filename) );\n    delete_file($filename); // delete file with name\n  } //end of file_mode loop\n} //end of file_content_types loop\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
