// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/scandir_variation8-win32-mb.phpt
  it("Test scandir() function : usage variations - different file names", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass a directory containing files with different types of names to test how scandir()\n * reads them\n */\necho \"*** Testing scandir() : usage variations ***\\n\";\n$dir_path = __DIR__ . \"/私はガラスを食べられますscandir_variation8/\";\nmkdir($dir_path);\n// heredoc string\n$heredoc = <<<EOT\nhd_file\nEOT;\n$inputs = array(\n       // int data\n/*1*/  0,\n       1,\n       12345,\n       -2345,\n       // float data\n/*5*/  10.5,\n       -10.5,\n       12.3456789000e10,\n       12.3456789000E-10,\n       .5,\n       // empty data\n/*10*/ \"\",\n       array(),\n       // string data\n/*12*/ \"double_file\",\n       'single_file',\n       $heredoc,\n);\n$iterator = 1;\nforeach($inputs as $key => $input) {\n    echo \"\\n-- Iteration $iterator --\\n\";\n    $handle = \"fp{$iterator}\";\n    var_dump( $$handle = @fopen($dir_path . \"/私はガラスを食べられます$input.tmp\", 'w') );\n    fclose($$handle);\n    $iterator++;\n};\necho \"\\n-- Call to scandir() --\\n\";\nvar_dump($content = scandir($dir_path));\n// remove all files in directory so can remove directory in CLEAN section\nforeach ($content as $file_name) {\n    // suppress errors as won't be able to remove \".\" and \"..\" entries\n    @unlink($dir_path . $file_name);\n}\n?>")).toMatchSnapshot();
  });
});
