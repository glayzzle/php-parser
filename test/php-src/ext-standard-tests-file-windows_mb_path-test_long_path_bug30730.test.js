// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_long_path_bug30730.phpt
  it("Bug #30730 Filename path length limit broken on NTFS volume, using rename", function () {
    expect(parser.parseCode("<?php\n$dir = __DIR__ . DIRECTORY_SEPARATOR . \"test_bug30730\";\n$file = $dir . DIRECTORY_SEPARATOR . \"test_file\";\nvar_dump(mkdir($dir));\n// Create a file in that directory\n$fp = fopen($file, 'wb+');\nfclose($fp);\n// Rename that directory in order that the file full path will be long enough to trigger the bug\n$dest_dir =str_pad($dir, 200, '0');\n$dest_file = $dest_dir . DIRECTORY_SEPARATOR . \"test_file\";\nvar_dump(rename($dir, $dest_dir));\nvar_dump(file_exists($dest_file));\nvar_dump(unlink($dest_file));\nvar_dump(rmdir($dest_dir));\n?>")).toMatchSnapshot();
  });
});
