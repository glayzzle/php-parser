// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/realpath_basic3.phpt
  it("Test realpath() with relative paths", function () {
    expect(parser.parseCode("<?php\necho \"\\n*** Testing basic functions of realpath() with files ***\\n\";\n/* creating directories and files */\n$file_path = __DIR__;\nmkdir(\"$file_path/realpath_basic3/home/test/\", 0777, true);\n$file_handle1 = fopen(\"$file_path/realpath_basic3/home/test/realpath_basic3.tmp\", \"w\");\n$file_handle2 = fopen(\"$file_path/realpath_basic3/home/realpath_basic3.tmp\", \"w\");\n$file_handle3 = fopen(\"$file_path/realpath_basic3/realpath_basic3.tmp\", \"w\");\nfclose($file_handle1);\nfclose($file_handle2);\nfclose($file_handle3);\necho \"\\n*** Testing realpath() on filenames ***\\n\";\n$filenames = array (\n  /* filenames resulting in valid paths */\n  \"./realpath_basic3/home/realpath_basic3.tmp\",\n  \"./realpath_basic3/realpath_basic3.tmp\",\n  \"./realpath_basic3//home/test//../test/./realpath_basic3.tmp\",\n  \"./realpath_basic3/home//../././realpath_basic3.tmp\",\n  /* filenames with invalid path */\n  // checking for binary safe\n  \"./realpath_basic3x000/home/realpath_basic3.tmp\",\n  \".///realpath_basic3/home//..//././test//realpath_basic3.tmp\",\n  \"./realpath_basic3/home/../home/../test/..realpath_basic3.tmp\"\n);\nchdir(\"$file_path/..\");\nchdir($file_path);\n$counter = 1;\n/* loop through $files to read the filepath of $file in the above array */\nforeach($filenames as $file) {\n  echo \"\\n-- Iteration $counter --\\n\";\n  var_dump( realpath($file) );\n  $counter++;\n}\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
