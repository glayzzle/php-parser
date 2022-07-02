// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/rename_variation3-win32.phpt
  it("Test rename() function: usage variations", function () {
    expect(parser.parseCode("<?php\nrequire __DIR__.'/file.inc';\n/* creating directory */\n$file_path = __DIR__;\n$dirname = \"$file_path/rename_variation3_dir\";\nmkdir($dirname);\n/* test rename() by trying to rename an existing file/dir to the same name\n  and one another */\n$filename = \"$file_path/rename_variation3.tmp\";\n$fp = fopen($filename, \"w\");\nif (!$fp) {\n    die(\"Cannot create $filename\\n\");\n}\nfclose($fp);\necho \"\\n-- Renaming file to same file name --\\n\";\nvar_dump( rename($filename, $filename) );\nvar_dump( file_exists($filename) );\necho \"\\n-- Renaming directory to same directory name --\\n\";\nvar_dump( rename($dirname, $dirname) );\nvar_dump( file_exists($dirname) );\necho \"\\n-- Renaming existing file to existing directory name --\\n\";\nvar_dump( rename($filename, $dirname) );\nvar_dump( file_exists($filename) );\nvar_dump( file_exists($dirname) );\necho \"\\n-- Renaming existing directory to existing file name --\\n\";\n$fp = fopen($filename, \"w\");\nfclose($fp);\nvar_dump( rename($dirname, $filename) );\nvar_dump( file_exists($filename) );\nvar_dump( file_exists($dirname) );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
