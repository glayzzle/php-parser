// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/readdir_variation3-win32-mb.phpt
  it("Test readdir() function : usage variations - sub-directories", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass a directory handle pointing to a directory that has a sub-directory\n * to test behaviour of readdir()\n */\necho \"*** Testing readdir() : usage variations ***\\n\";\n// include the file.inc for Function: function create_files()\nchdir(__DIR__);\ninclude(__DIR__.\"/../file/file.inc\");\n$path_top = __DIR__ . '/readdir_variation3-win32-mb';\n$path_sub = $path_top . '/私はガラスを食べられますsub_folder';\nmkdir($path_top);\nmkdir($path_sub);\ncreate_files($path_top, 2);\ncreate_files($path_sub, 2);\n$dir_handle = opendir($path_top);\nwhile(FALSE !== ($file = readdir($dir_handle))) {\n    // different OS order files differently so will\n    // store file names into an array so can use sorted in expected output\n    $contents[] = $file;\n}\n// more important to check that all contents are present than order they are returned in\nsort($contents);\nvar_dump($contents);\ndelete_files($path_top, 2);\ndelete_files($path_sub, 2);\nclosedir($dir_handle);\n?>")).toMatchSnapshot();
  });
});
