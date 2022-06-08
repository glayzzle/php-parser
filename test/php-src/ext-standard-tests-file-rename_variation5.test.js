// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/rename_variation5.phpt
  it("Test rename() function: usage variations-6", function () {
    expect(parser.parseCode("<?php\n/* test rename() by trying to rename an existing file/dir/link to the same name\n  and one another */\n// create a dir\n$file_path = __DIR__;\n$dirname = \"$file_path/rename_variation5_dir\";\nmkdir($dirname);\n//create a file\n$filename = \"$file_path/rename_variation5.tmp\";\n$fp = fopen($filename, \"w\");\nfclose($fp);\n// create a link\n$linkname = \"$file_path/rename_variation5_link.tmp\";\nsymlink($filename, $linkname);\necho \"\\n-- Renaming link to same link name --\\n\";\nvar_dump( rename($linkname, $linkname) );\necho \"\\n-- Renaming file to same file name --\\n\";\nvar_dump( rename($filename, $filename) );\necho \"\\n-- Renaming directory to same directory name --\\n\";\nvar_dump( rename($dirname, $dirname) );\necho \"\\n-- Renaming existing link to existing directory name --\\n\";\nvar_dump( rename($linkname, $dirname) );\necho \"\\n-- Renaming existing link to existing file name --\\n\";\nvar_dump( rename($linkname, $filename) );\necho \"\\n-- Renaming existing file to existing directory name --\\n\";\nvar_dump( rename($filename, $dirname) );\necho \"\\n-- Renaming existing file to existing link name --\\n\";\nvar_dump( rename($filename, $linkname) );\necho \"\\n-- Renaming existing directory to existing file name --\\n\";\n$fp = fopen($filename, \"w\");\nfclose($fp);\nvar_dump( rename($dirname, $filename) );\necho \"\\n-- Renaming existing directory to existing link name --\\n\";\nvar_dump( rename($dirname, $linkname) );\necho \"Done\\n\";\n?>")).toMatchSnapshot();
  });
});
