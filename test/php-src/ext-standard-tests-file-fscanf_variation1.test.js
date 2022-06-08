// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fscanf_variation1.phpt
  it("Test fscanf() function: usage variations - return type without third argument", function () {
    expect(parser.parseCode("<?php\n/* test fscanf() for its return type */\n$file_path = __DIR__;\necho \"*** Testing fscanf(): for its return type without third argument ***\\n\";\n// create a file\n$filename = \"$file_path/fscanf_variation1.tmp\";\n$file_handle = fopen($filename, \"w\");\nif($file_handle == false)\n  exit(\"Error:failed to open file $filename\");\n@fwrite($file_handle, \"hello_world \");\n@fwrite($file_handle, 12345);\nfclose($file_handle);\n// open file for reading\n$file_handle = fopen($filename, \"r\");\n// capturing the return value from fscanf() called without third argument\n$return_value = fscanf($file_handle, \"%s\");\nvar_dump( is_array($return_value), $return_value); // return type is an array\nfclose($file_handle);\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
