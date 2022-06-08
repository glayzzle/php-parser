// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/readdir_basic.phpt
  it("Test readdir() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of readdir()\n */\necho \"*** Testing readdir() : basic functionality ***\\n\";\n// include the file.inc for Function: function create_files()\nchdir(__DIR__);\ninclude(__DIR__.\"/../file/file.inc\");\n$path = __DIR__ . '/readdir_basic';\nmkdir($path);\ncreate_files($path, 3);\necho \"\\n-- Call readdir() with \\$path argument --\\n\";\nvar_dump($dh = opendir($path));\n$a = array();\nwhile( FALSE !== ($file = readdir($dh)) ) {\n    $a[] = $file;\n}\nsort($a);\nforeach($a as $file) {\n    var_dump($file);\n}\necho \"\\n-- Call readdir() without \\$path argument --\\n\";\nvar_dump($dh = opendir($path));\n$a = array();\nwhile( FALSE !== ( $file = readdir() ) ) {\n    $a[] = $file;\n}\nsort($a);\nforeach($a as $file) {\n    var_dump($file);\n}\ndelete_files($path, 3);\nclosedir($dh);\n?>")).toMatchSnapshot();
  });
});
