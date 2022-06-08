// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/readdir_variation6.phpt
  it("Test readdir() function : usage variations - operate on previously opened directory", function () {
    expect(parser.parseCode("<?php\n/*\n * Open two directory handles on the same directory and pass both\n * to readdir() to test behaviour\n */\necho \"*** Testing readdir() : usage variations ***\\n\";\n// include the file.inc for Function: function create_files()\ninclude( __DIR__.\"/../file/file.inc\");\n// create the temporary directory\n$dir_path = __DIR__ . \"/readdir_variation6\";\nmkdir($dir_path);\n// create files within the temporary directory\ncreate_files($dir_path, 3, \"alphanumeric\", 0755, 1, \"w\", \"readdir_variation6\");\n// open the directory\n$dir_handle1 = opendir($dir_path);\n// open the same directory again without closing it\nopendir($dir_path);\necho \"\\n-- Reading Directory Contents with Previous Handle --\\n\";\n$a = array();\nwhile (FALSE !== ($file = readdir($dir_handle1))) {\n    $a[] = $file;\n}\nsort($a);\nforeach ($a as $file) {\n    var_dump($file);\n}\necho \"\\n-- Reading Directory Contents with Current Handle (no arguments supplied) --\\n\";\n$a = array();\nwhile (FALSE !== ($file = readdir())) {\n    $a[] = $file;\n}\nsort($a);\nforeach ($a as $file) {\n    var_dump($file);\n}\n// delete temporary files\ndelete_files($dir_path, 3, \"readdir_variation6\");\nclosedir($dir_handle1);\nclosedir();\n?>")).toMatchSnapshot();
  });
});
