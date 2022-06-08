// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/dir_variation4-win32-mb.phpt
  it("Test dir() function : usage variations - operate on previously opened directory", function () {
    expect(parser.parseCode("<?php\n/*\n * Testing the behavior of dir() function by trying to open a\n * directory which is already open.\n */\necho \"*** Testing dir() : operate on previously opened directory ***\\n\";\n// include the file.inc for Function: function create_files()\ninclude( __DIR__.\"/../file/file.inc\");\n// create the temporary directory\n$file_path = __DIR__;\n$dir_path = $file_path.\"/私はガラスを食べられますdir_variation4\";\n@mkdir($dir_path);\n// create files within the temporary directory\ncreate_files($dir_path, 3, \"alphanumeric\", 0755, 1, \"w\", \"私はガラスを食べられますdir_variation4\");\n// open the directory\n$d = dir($dir_path);\nvar_dump( $d );\n// open the same directory again without closing it\n$e = dir($dir_path);\nvar_dump( $e );\necho \"-- reading directory contents with previous handle --\\n\";\nvar_dump( $d->read() ); // with previous handle\necho \"-- reading directory contents with current handle --\\n\";\nvar_dump( $e->read() ); // with current handle\n// delete temporary files\ndelete_files($dir_path, 3, \"私はガラスを食べられますdir_variation4\");\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
