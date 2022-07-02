// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fscanf_variation52.phpt
  it("Test fscanf() function: usage variations - empty file", function () {
    expect(parser.parseCode("<?php\n/* Test fscanf() to scan an empty file */\n$file_path = __DIR__;\necho \"*** Test fscanf(): to read an empty file ***\\n\";\n// various formats\n$formats = array( \"%d\", \"%f\", \"%e\", \"%u\", \" %s\", \"%x\", \"%o\");\n$counter = 1;\n// various read modes\n$modes = array(\"r\", \"rb\", \"rt\", \"r+\", \"r+b\", \"r+t\",\n               \"w+\", \"w+b\", \"w+t\",\n               \"a+\", \"a+b\", \"a+t\"\n         );\n$counter = 1;\n// reading the values from file using different integer formats\nforeach($modes as $mode) {\n  // create an empty file\n  $filename = \"$file_path/fscanf_variation52.tmp\";\n  $file_handle = fopen($filename, \"w\");\n  if($file_handle == false)\n    exit(\"Error:failed to open file $filename\");\n  //closing the file\n  fclose($file_handle);\n  // opening file in $mode mode\n  $file_handle = fopen($filename, $mode);\n  if($file_handle == false) {\n    exit(\"Error:failed to open file $filename\");\n  }\n  echo \"\\n-- iteration $counter --\\n\";\n  foreach($formats as $format) {\n    var_dump( fscanf($file_handle,$format) );\n    rewind($file_handle);\n  }\n  $counter++;\n  fclose($file_handle);\n  unlink($filename);\n}\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
