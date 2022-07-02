// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/readdir_variation2-win32-mb.phpt
  it("Test readdir() function : usage variations - empty directories", function () {
    expect(parser.parseCode("<?php\n/*\n * Pass readdir() a directory handle pointing to an empty directory to test behaviour\n */\necho \"*** Testing readdir() : usage variations ***\\n\";\n$path = __DIR__ . '/私はガラスを食べられますreaddir_variation2';\nmkdir($path);\n$dir_handle = opendir($path);\necho \"\\n-- Pass an empty directory to readdir() --\\n\";\nfunction mysort($a,$b) {\n    return strlen($a) > strlen($b) ? 1 : -1;\n}\n$entries = array();\nwhile(FALSE !== ($file = readdir($dir_handle))){\n    $entries[] = $file;\n}\nclosedir($dir_handle);\nusort($entries, \"mysort\");\nforeach($entries as $entry) {\n    var_dump($entry);\n}\n?>")).toMatchSnapshot();
  });
});
