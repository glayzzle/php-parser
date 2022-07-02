// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/fseek_dir_basic.phpt
  it("Testing fseek() on a directory stream", function () {
    expect(parser.parseCode("<?php\n// include the file.inc for Function: function create_files()\nrequire(__DIR__ . '/file.inc');\n$path = __DIR__ . '/fseek_dir_basic';\nmkdir($path);\ncreate_files($path, 3);\necho \"call readdir():\\n\";\nvar_dump($dh = opendir($path));\n$files = array();\nwhile( FALSE !== ($files[] = readdir($dh)) ) {}\nsort($files);\nvar_dump($files);\n$files = array();\necho \"\\ncall fseek() on directory resource:\\n\";\nvar_dump(fseek($dh, 20));\necho \"call readdir():\\n\";\nwhile( FALSE !== ($files[] = readdir($dh)) ) {}\nsort($files);\nvar_dump($files);\n$files = array();\necho \"\\ncall fseek() with different arguments on directory resource:\\n\";\nvar_dump(fseek($dh, 20, SEEK_END));\necho \"call readdir():\\n\";\nwhile( FALSE !== ($files[] = readdir($dh)) ) {}\nsort($files);\nvar_dump($files);\ndelete_files($path, 3);\nclosedir($dh);\nvar_dump(rmdir($path));\n?>")).toMatchSnapshot();
  });
});
