// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/file_variation5.phpt
  it("file() with various paths", function () {
    expect(parser.parseCode("<?php\n$script_directory = __DIR__;\nchdir($script_directory);\n$test_dirname = basename(__FILE__, \".php\") . \"testdir\";\nmkdir($test_dirname);\n$filepath = __FILE__ . \".tmp\";\n$filename = basename($filepath);\n$fd = fopen($filepath, \"w+\");\nfwrite($fd, \"Line 1\\nLine 2\\nLine 3\");\nfclose($fd);\necho \"file() on a path containing .. and .\\n\";\nvar_dump(file(\"./$test_dirname/../$filename\"));\necho \"\\nfile() on a path containing .. with invalid directories\\n\";\nvar_dump(file(\"./$test_dirname/bad_dir/../../$filename\"));\necho \"\\nfile() on a linked file\\n\";\n$linkname = \"somelink\";\nvar_dump(symlink($filepath, $linkname));\nvar_dump(file($linkname));\nvar_dump(unlink($linkname));\necho \"\\nfile() on a relative path from a different working directory\\n\";\nchdir($test_dirname);\nvar_dump(file(\"../$filename\"));\nchdir($script_directory);\nchdir($script_directory);\nrmdir($test_dirname);\nunlink($filepath);\n?>")).toMatchSnapshot();
  });
});
