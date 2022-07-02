// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fscanf_variation51.phpt
  it("Test fscanf() function: usage variations - file opened in write only mode", function () {
    expect(parser.parseCode("<?php\n/* Test fscanf() to scan a file for read when file is opened inwrite only mode */\n$file_path = __DIR__;\necho \"*** Test fscanf(): to read from a file opened in write only mode ***\\n\";\n// create a file\n$filename = \"$file_path/fscanf_variation51.tmp\";\n$file_handle = fopen($filename, \"w\");\nif($file_handle == false)\n  exit(\"Error:failed to open file $filename\");\n//writing data to the file\n@fwrite($file_handle,\"sample text\\n\");\n//closing the file\nfclose($file_handle);\n// various formats\n$formats = array( \"%d\", \"%f\", \"%e\", \"%u\", \" %s\", \"%x\", \"%o\");\n$counter = 1;\n// various write only modes\n$modes = array(\"w\", \"wb\", \"wt\",\n               \"a\", \"ab\", \"at\",\n               \"x\", \"xb\", \"xt\"\n         );\n$counter = 1;\n// reading the values from file using different integer formats\nforeach($modes as $mode) {\n  $file_handle = fopen($filename, $mode);\n  if($file_handle == false) {\n    exit(\"Error:failed to open file $filename\");\n  }\n  echo \"\\n-- iteration $counter --\\n\";\n  foreach($formats as $format) {\n    var_dump( fscanf($file_handle,$format) );\n    rewind($file_handle);\n  }\n  $counter++;\n  fclose($file_handle);\n  unlink($filename);\n}\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
