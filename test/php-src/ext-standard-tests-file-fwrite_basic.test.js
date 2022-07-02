// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fwrite_basic.phpt
  it("Test fwrite() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n// include the file.inc for Function: function delete_file($filename)\ninclude (\"file.inc\");\necho \"*** Testing fwrite() basic operations ***\\n\";\n/*\n test fwrite with file opened in mode : w,wb,wt,w+,w+b,w+t\n File containing data of type,  numeric, text, text_with_new_line, alphanumeric\n*/\n$file_modes = array( \"w\", \"wb\", \"wt\", \"w+\", \"w+b\", \"w+t\");\n$file_content_types = array(\"numeric\",\"text\",\"text_with_new_line\",\"alphanumeric\");\nforeach($file_content_types as $file_content_type) {\n  echo \"\\n-- Testing fwrite() with file having data of type \". $file_content_type .\" --\\n\";\n  $filename = __DIR__.\"/fwrite_basic.tmp\"; // this is name of the file\n  for($inner_loop_counter = 0;\n      $inner_loop_counter < count($file_modes);\n      $inner_loop_counter++) {\n     echo \"--  File opened in mode : \" . $file_modes[$inner_loop_counter]. \" --\\n\";\n     /* open the file using $files_modes and perform fwrite() on it */\n     $file_handle = fopen($filename, $file_modes[$inner_loop_counter]);\n     if (!$file_handle) {\n       echo \"Error: failed to fopen() file: $filename!\";\n       exit();\n     }\n     $data_to_be_written=\"\";\n     fill_buffer($data_to_be_written, $file_content_type, 1024);  //get the data of size 1024\n    /* Write the data in to the file, verify the write by checking file pointer position,\n       eof position, and data. */\n    // writing 100 bytes\n    var_dump( ftell($file_handle) );  // Expecting 0\n    var_dump( fwrite($file_handle, $data_to_be_written, 100)); //int(100)\n    var_dump( feof($file_handle) );  // expected : false\n    var_dump( ftell($file_handle) );  //expected: 100\n    // trying to write more than the available data, available 1024 bytes but trying 2048\n    var_dump( fwrite($file_handle, $data_to_be_written, 2048)); //int(1024)\n    var_dump( feof($file_handle) );  // expected : false\n    var_dump( ftell($file_handle) );  // expected: 1124\n    // fwrite() without length parameter\n    var_dump( fwrite($file_handle, $data_to_be_written)); //int(1024)\n    var_dump( ftell($file_handle) );  // expected: 2148\n    var_dump( feof($file_handle) );  // expected: false\n    // close the file, get the size and content of the file.\n    var_dump( fclose($file_handle) ); //expected : true\n    clearstatcache();//clears file status cache\n    var_dump( filesize($filename) );  // expected:  2148\n    var_dump(md5(file_get_contents($filename))); // hash the output\n  } // end of inner for loop\n  // delete the file created : fwrite_basic.tmp\n  delete_file($filename);\n} // end of outer foreach loop\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
