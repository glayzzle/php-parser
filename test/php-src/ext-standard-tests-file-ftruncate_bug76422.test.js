// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/ftruncate_bug76422.phpt
  it("Bug #76422 ftruncate fails on files > 2GB", function () {
    expect(parser.parseCode("<?php\n$fn = __DIR__ . DIRECTORY_SEPARATOR . \"test76422\";\n$file_handle = fopen($fn,'cb');\nif (false === $file_handle) {\n    die('Cannot open test file :/');\n}\n/* Check if ftruncate() with 2GB works. If it doesn't, it's likely that large files are\n * generally not supported (EFBIG). */\n$truncate_offset = 2 * 1024 * 1024 * 1024;\n$ftruncate_result = ftruncate($file_handle, $truncate_offset);\nif (false === $ftruncate_result) {\n    var_dump(true);\n    fclose($file_handle);\n    unlink($fn);\n    return;\n}\n$truncate_offset = 4 * 1024 * 1024 * 1024 + 1;\n$ftruncate_result = ftruncate($file_handle, $truncate_offset);\nif (false === $ftruncate_result) {\n    // NOTE: unlink() is deliberately repeated - If this test runs out of disk space attempting to reserve space for this temporary file,\n    // then the--CLEAN-- script can't be run (if we don't delete the file),\n    // because there wouldn't be any free disk space to save a new php file.\n    fclose($file_handle);\n    unlink($fn);\n    die('Truncate has failed :/');\n}\nfclose($file_handle);\nvar_dump(filesize($fn) >= $truncate_offset);\nunlink($fn);\n?>")).toMatchSnapshot();
  });
});
