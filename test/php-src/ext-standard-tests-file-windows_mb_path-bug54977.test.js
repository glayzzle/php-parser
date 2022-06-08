// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/bug54977.phpt
  it("Bug #54977 UTF-8 files and folder are not shown", function () {
    expect(parser.parseCode("<?php\n/* This file is in UTF-8. */\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$prefix = __DIR__ . DIRECTORY_SEPARATOR . \"testBug54977\" . DIRECTORY_SEPARATOR;\n$paths = array(\"多国語\", \"王\", \"汚れて掘る\");\nmkdir($prefix);\nforeach ($paths as $d) {\n    mkdir($prefix . $d);\n    file_put_contents($prefix . $d . \".test\", $d);\n}\n$myDirectory = opendir($prefix);\nwhile($entryName = readdir($myDirectory)) {\n    echo get_basename_with_cp($prefix . $entryName, 65001, false) . \"\\n\";\n}\nclosedir($myDirectory);\nforeach ($paths as $d) {\n    rmdir($prefix . $d);\n    unlink($prefix . $d . \".test\");\n}\nrmdir($prefix);\n?>")).toMatchSnapshot();
  });
});
