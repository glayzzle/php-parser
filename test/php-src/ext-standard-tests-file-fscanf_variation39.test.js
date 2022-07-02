// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fscanf_variation39.phpt
  it("Test fscanf() function: usage variations - unsigned int formats with integer values", function () {
    expect(parser.parseCode("<?php\n/* Test fscanf() to scan different integer values using different unsigned int format types */\n$file_path = __DIR__;\necho \"*** Test fscanf(): different unsigned int format types with different integer values ***\\n\";\n// create a file\n$filename = \"$file_path/fscanf_variation39.tmp\";\n$file_handle = fopen($filename, \"w\");\nif($file_handle == false)\n  exit(\"Error:failed to open file $filename\");\n// different valid  integer values\n$valid_ints = array(\n  0,\n  1,\n  -1,\n  -2147483648, // max negative integer value\n  -2147483647,\n  2147483647,  // max positive integer value\n  2147483640,\n  0x123B,      // integer as hexadecimal\n  0x12ab,\n  0Xfff,\n  0XFA,\n  -0x80000000, // max negative integer as hexadecimal\n  0x7fffffff,  // max positive integer as hexadecimal\n  0x7FFFFFFF,  // max positive integer as hexadecimal\n  0123,        // integer as octal\n  01,       // should be quivalent to octal 1\n  -020000000000, // max negative integer as octal\n  017777777777  // max positive integer as octal\n);\n// various unsigned int formats\n$unsigned_formats = array( \"%u\", \"%hu\", \"%lu\", \"%Lu\", \" %u\", \"%u \", \"% u\", \"\\t%u\", \"\\n%u\", \"%4u\", \"%30u\", \"%[0-9]\", \"%*u\");\n$counter = 1;\n// writing to the file\nforeach($valid_ints as $int_value) {\n  @fprintf($file_handle, $int_value);\n  @fprintf($file_handle, \"\\n\");\n}\n// closing the file\nfclose($file_handle);\n// opening the file for reading\n$file_handle = fopen($filename, \"r\");\nif($file_handle == false) {\n  exit(\"Error:failed to open file $filename\");\n}\n$counter = 1;\n// reading the values from file using different unsigned int formats\nforeach($unsigned_formats as $unsigned_format) {\n  // rewind the file so that for every foreach iteration the file pointer starts from bof\n  rewind($file_handle);\n  echo \"\\n-- iteration $counter --\\n\";\n  while( !feof($file_handle) ) {\n    try {\n      var_dump(fscanf($file_handle,$unsigned_format));\n    } catch (ValueError $exception) {\n      echo $exception->getMessage() . \"\\n\";\n    }\n  }\n  $counter++;\n}\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
