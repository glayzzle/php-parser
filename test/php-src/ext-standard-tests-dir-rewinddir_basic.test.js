// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/rewinddir_basic.phpt
  it("Test rewinddir() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of rewinddir()\n */\necho \"*** Testing rewinddir() : basic functionality ***\\n\";\n// include file.inc for create_files function\ninclude(__DIR__ . \"/../file/file.inc\");\n$dir_path1 = __DIR__ . \"/rewinddir_basic_dir1\";\n$dir_path2 = __DIR__ . \"/rewinddir_basic_dir2\";\nmkdir($dir_path1);\nmkdir($dir_path2);\n@create_files($dir_path1, 1);\n@create_files($dir_path2, 1, 'numeric', 0755, 1, 'w', 'file', 2);\nvar_dump($dh1 = opendir($dir_path1));\nvar_dump($dh2 = opendir($dir_path2));\n$data = array();\necho \"\\n-- Read and rewind first directory (argument supplied) --\\n\";\nwhile(FALSE !== $file1 = readdir($dh1)) {\n    $data[] = $file1;\n}\n$first = $data[0];\nsort($data);\nvar_dump($data);\nvar_dump(rewinddir($dh1));\nvar_dump(readdir($dh1) == $first);\n$data = array();\necho \"\\n-- Read and rewind second directory (no argument supplied) --\\n\";\nwhile(FALSE !== $file2 = readdir()) {\n    $data[] = $file2;\n}\n$first = $data[0];\nsort($data);\nvar_dump($data);\nvar_dump(rewinddir());\nvar_dump(readdir() == $first);\nclosedir($dh1);\nclosedir($dh2);\ndelete_files($dir_path1, 1);\ndelete_files($dir_path2, 1, 'file', 2);\n?>")).toMatchSnapshot();
  });
});
