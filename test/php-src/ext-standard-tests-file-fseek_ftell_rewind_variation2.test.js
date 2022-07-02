// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fseek_ftell_rewind_variation2.phpt
  it("Test fseek(), ftell() & rewind() functions : usage variations - all w and x modes, default whence", function () {
    expect(parser.parseCode("<?php\n// include the file.inc for common functions for test\ninclude (\"file.inc\");\n/* Testing fseek(),ftell(),rewind() functions\n     1. All  write and create with write modes\n     2. Testing fseek() without using argument whence\n*/\necho \"*** Testing fseek(), ftell(), rewind() : default whence & all w and x modes ***\\n\";\n$file_modes = array( \"w\",\"wb\",\"wt\",\"w+\",\"w+b\",\"w+t\",\n                     \"x\",\"xb\",\"xt\",\"x+\",\"x+b\",\"x+t\");\n$file_content_types = array( \"text_with_new_line\",\"alphanumeric\");\n$offset = array(-1, 0, 1, 513); // different offsets, including negative and beyond size\n$filename = __DIR__.\"/fseek_ftell_rewind_variation2.tmp\"; // this is name of the file created by create_files()\n/* open the file using $files_modes and perform fseek(),ftell() and rewind() on it */\nforeach($file_content_types as $file_content_type){\n  echo \"\\n-- File having data of type \". $file_content_type .\" --\\n\";\n  foreach($file_modes as $file_mode) {\n    echo \"-- File opened in mode \".$file_mode.\" --\\n\";\n    $file_handle = fopen($filename, $file_mode);\n    if (!$file_handle){\n      echo \"Error: failed to fopen() file: $filename!\";\n      exit();\n    }\n    $data_to_be_written=\"\";\n    fill_buffer($data_to_be_written, $file_content_type, 512); //get the data of size 512\n    $data_to_be_written = $data_to_be_written;\n    fwrite($file_handle,$data_to_be_written);\n    rewind($file_handle);\n    echo \"-- Testing fseek() without using argument whence --\\n\";\n    foreach($offset as $count){\n      var_dump( fseek($file_handle,$count) );\n      var_dump( ftell($file_handle) ); // confirm the file pointer position\n      var_dump( feof($file_handle) ); //ensure that file pointer is not at end\n    } //end of offset loop\n    //close the file and check the size\n    fclose($file_handle);\n    var_dump( filesize($filename) );\n    delete_file($filename); // delete file with name\n  } //end of file_mode loop\n} //end of file_content_types loop\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
