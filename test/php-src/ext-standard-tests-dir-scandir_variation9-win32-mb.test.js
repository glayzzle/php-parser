// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/scandir_variation9-win32-mb.phpt
  it("Test scandir() function : usage variations - different ints as $sorting_order arg", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass different integers as $sorting_order argument to test how scandir()\n * re-orders the array\n */\necho \"*** Testing scandir() : usage variations ***\\n\";\n// include for create_files/delete_files functions\ninclude(__DIR__ . '/../file/file.inc');\n// create directory and files\n$dir = __DIR__ . '/私はガラスを食べられますscandir_variation9';\nmkdir($dir);\n@create_files($dir, 2, \"numeric\", 0755, 1, \"w\", \"私はガラスを食べられますfile\");\n// different ints to pass as $sorting_order argument\n$ints = array (PHP_INT_MAX, -PHP_INT_MAX, 0);\nforeach($ints as $sorting_order) {\n    var_dump( scandir($dir, $sorting_order) );\n}\ndelete_files($dir, 2, \"私はガラスを食べられますfile\");\n?>")).toMatchSnapshot();
  });
});
