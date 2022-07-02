// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fgets_variation5.phpt
  it("Test fgets() function : usage variations - read beyond filesize", function () {
    expect(parser.parseCode("<?php\n// include the file.inc for common test functions\ninclude (\"file.inc\");\n$file_modes = array(\"w+\", \"w+b\", \"w+t\",\n                    \"a+\", \"a+b\", \"a+t\",\n                    \"x+\", \"x+b\", \"x+t\");\n$file_content_types = array(\"numeric\", \"text\", \"text_with_new_line\", \"alphanumeric\");\necho \"*** Testing fgets() : usage variations ***\\n\";\n$filename = __DIR__.\"/fgets_variation5.tmp\";\nforeach($file_modes as $file_mode) {\n  echo \"\\n-- Testing fgets() with file opened using mode $file_mode --\\n\";\n  foreach($file_content_types as $file_content_type) {\n    echo \"-- File content type : $file_content_type --\\n\";\n    /* create files with $file_content_type */\n    $file_handle = fopen($filename, $file_mode);\n    $data = fill_file($file_handle, $file_content_type, 50);\n    if ( !$file_handle ) {\n      echo \"Error: failed to open file $filename!\";\n      exit();\n    }\n    /* read with length beyond file size */\n    echo \"-- fgets() with length > filesize --\\n\";\n    rewind($file_handle);\n    var_dump( ftell($file_handle) );\n    var_dump( fgets($file_handle, 50 + 23) ); // expected: 50\n    var_dump( ftell($file_handle) ); // ensure the file pointer position\n    var_dump( feof($file_handle) );  // ensure if eof set\n    //close file\n    fclose($file_handle);\n    // delete file\n    delete_file($filename);\n  } // file_content_type loop\n} // file_mode loop\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
