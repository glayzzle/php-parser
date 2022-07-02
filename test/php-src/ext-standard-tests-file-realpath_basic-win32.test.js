// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/realpath_basic-win32.phpt
  it("Test realpath() function: basic functionality", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Testing basic functions of realpath() with files ***\\n\";\n/* creating directories and files */\n$file_path = __DIR__;\nmkdir(\"$file_path/realpath_basic/home/test/\", 0777, true);\n$file_handle1 = fopen(\"$file_path/realpath_basic/home/test/realpath_basic.tmp\", \"w\");\n$file_handle2 = fopen(\"$file_path/realpath_basic/home/realpath_basic.tmp\", \"w\");\n$file_handle3 = fopen(\"$file_path/realpath_basic/realpath_basic.tmp\", \"w\");\nfclose($file_handle1);\nfclose($file_handle2);\nfclose($file_handle3);\necho \"\\n*** Testing realpath() on filenames ***\\n\";\n$filenames = array (\n  /* filenames resulting in valid paths */\n  \"$file_path/realpath_basic/home/realpath_basic.tmp\",\n  \"$file_path/realpath_basic/realpath_basic.tmp/\",\n  \"$file_path/realpath_basic//home/test//../test/./realpath_basic.tmp\",\n  \"$file_path/realpath_basic/home//../././realpath_basic.tmp//\",\n   // checking for binary safe\n  \"$file_path/realpath_basic/home/realpath_basic.tmp\",\n  /* filenames with invalid path */\n  \"$file_path///realpath_basic/home//..//././test//realpath_basic.tmp\",\n  \"$file_path/realpath_basic/home/../home/../test/../..realpath_basic.tmp\"\n);\n$counter = 1;\n/* loop through $files to read the filepath of $file in the above array */\nforeach($filenames as $file) {\n  echo \"\\n-- Iteration $counter --\\n\";\n  var_dump( realpath($file) );\n  $counter++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
