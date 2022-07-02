// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fscanf_variation54.phpt
  it("Test fscanf() function: usage variations - objects", function () {
    expect(parser.parseCode("<?php\n/* Test fscanf() to scan a file to read objects */\n$file_path = __DIR__;\necho \"*** Test fscanf(): to read objects from a file ***\\n\";\n// declare a class\nclass foo\n{\n  public $var1 = 1;\n  public $var2 = 2;\n  function __toString() {\n    return \"Object\";\n  }\n}\n// create an object\n$obj = new foo(); //creating new object\n// create a file\n$filename = \"$file_path/fscanf_variation54.tmp\";\n$file_handle = fopen($filename, \"w\");\nif($file_handle == false)\n  exit(\"Error:failed to open file $filename\");\n//writing object to the file\nfwrite($file_handle, $obj);\n//closing the file\nfclose($file_handle);\n// various formats\n$formats = array( \"%d\", \"%f\", \"%e\", \"%u\", \" %s\", \"%x\", \"%o\");\n$counter = 1;\n// opening file for read\n$file_handle = fopen($filename, \"r\");\n  if($file_handle == false) {\n    exit(\"Error:failed to open file $filename\");\n  }\necho \"\\n-- iteration $counter --\\n\";\nforeach($formats as $format) {\n  var_dump( fscanf($file_handle,$format) );\n  rewind($file_handle);\n}\nfclose($file_handle);\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
