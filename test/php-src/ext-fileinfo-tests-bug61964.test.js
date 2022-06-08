// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/fileinfo/tests/bug61964.phpt
  it("Bug #61964 (finfo_open with directory cause invalid free)", function () {
    expect(parser.parseCode("<?php\n$magic_file = __DIR__ . DIRECTORY_SEPARATOR . 'magic';\n$ret = @finfo_open(FILEINFO_NONE, $magic_file . \".non-exits\");\nvar_dump($ret);\n$dir = __DIR__ . \"/bug61964\";\n@mkdir($dir);\n$magic_file_copy = $dir . \"/magic.copy\";\n$magic_file_copy2 = $magic_file_copy . \"2\";\ncopy($magic_file, $magic_file_copy);\ncopy($magic_file, $magic_file_copy2);\n$ret = finfo_open(FILEINFO_NONE, $dir);\nvar_dump($ret);\n$ret = @finfo_open(FILEINFO_NONE, $dir);\nvar_dump($ret);\n$ret = @finfo_open(FILEINFO_NONE, $dir. \"/non-exits-dir\");\nvar_dump($ret);\n// write some test files to test folder\nfile_put_contents($dir . \"/test1.txt\", \"string\\n> Core\\n> Me\");\nfile_put_contents($dir . \"/test2.txt\", \"a\\nb\\n\");\n@mkdir($dir . \"/test-inner-folder\");\nfinfo_open(FILEINFO_NONE, $dir);\necho \"DONE: testing dir with files\\n\";\nrmdir($dir . \"/test-inner-folder\");\nunlink($dir . \"/test1.txt\");\nunlink($dir . \"/test2.txt\");\nunlink($magic_file_copy);\nunlink($magic_file_copy2);\nrmdir($dir);\n?>")).toMatchSnapshot();
  });
});
