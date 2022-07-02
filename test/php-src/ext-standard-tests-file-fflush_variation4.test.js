// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fflush_variation4.phpt
  it("Test fflush() function: usage variations - file opened in read-only mode", function () {
    expect(parser.parseCode("<?php\n/* test fflush() with handle to a file opened in read-only mode as resource */\n$file_path = __DIR__;\nrequire $file_path.'/file.inc';\necho \"*** Testing fflush(): with file handles of files opened in various read modes ***\\n\";\n$file_modes = array(\"r\", \"rb\", \"rt\");\n$file_name = \"$file_path/fflush_variation4.tmp\";\n$count = 1;\nforeach( $file_modes as $mode ) {\n  echo \"-- Iteration $count with file opened in $mode mode --\\n\";\n  // creating a file\n  $file_handle = fopen($file_name, \"w\");\n  if($file_handle == false)\n    exit(\"Error:failed to open file $file_name\");\n  fclose($file_handle);\n  // opening the file in different read modes\n  $file_handle = fopen($file_name, $mode);\n  if($file_handle == false)\n    exit(\"Error:failed to open file $file_name\");\n  var_dump( fflush($file_handle) );\n  fclose($file_handle);\n  unlink($file_name);\n  $count++;\n}\necho \"\\n*** Done ***\";\n?>")).toMatchSnapshot();
  });
});
