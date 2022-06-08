// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/dir_variation6.phpt
  it("Test dir() function : usage variations - non-existent directory", function () {
    expect(parser.parseCode("<?php\n/*\n * Passing a non-existent directory as argument to dir() function\n * and checking to see if proper warning message is output.\n */\necho \"*** Testing dir() : open a non-existent directory ***\\n\";\n// create the temporary directory\n$file_path = __DIR__;\n$dir_path = $file_path.\"/dir_variation6\";\n@mkdir($dir_path);\n// open existent directory\n$d = dir($dir_path);\n$d->close(); //close the dir\n// remove directory and try to open the same(non-existent) directory again\nrmdir($dir_path);\nclearstatcache();\necho \"-- opening previously removed directory --\\n\";\nvar_dump( dir($dir_path) );\n// point to a non-existent directory\n$non_existent_dir = $file_path.\"/non_existent_dir\";\necho \"-- opening non-existent directory --\\n\";\n$d = dir($non_existent_dir);\nvar_dump( $d );\necho \"Done\";\n?>")).toMatchSnapshot();
  });
});
