// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/scandir_variation10-win32-mb.phpt
  it("Test scandir() function : usage variations - different sorting constants", function () {
    expect(parser.parseCode("<?php\nprintf(\"SCANDIR_SORT_ASCENDING: %d\\n\", SCANDIR_SORT_ASCENDING);\nprintf(\"SCANDIR_SORT_DESCENDING: %d\\n\", SCANDIR_SORT_DESCENDING);\nprintf(\"SCANDIR_SORT_NONE: %d\\n\", SCANDIR_SORT_NONE);\n/*\n * Pass different integers as $sorting_order argument to test how scandir()\n * re-orders the array\n */\necho \"*** Testing scandir() : usage variations ***\\n\";\n// include for create_files/delete_files functions\ninclude(__DIR__ . '/../file/file.inc');\n// create directory and files\n$dir = __DIR__ . '/私はガラスを食べられますscandir_variation10';\nmkdir($dir);\n@create_files($dir, 2, \"numeric\", 0755, 1, \"w\", \"私はガラスを食べられますfile\");\n// Deterministic tests.\nvar_dump(scandir($dir, SCANDIR_SORT_ASCENDING));\nvar_dump(scandir($dir, SCANDIR_SORT_DESCENDING));\n// Non-deterministic tests.\n$files = scandir($dir, SCANDIR_SORT_NONE);\nvar_dump(count($files));\nvar_dump(in_array('.', $files));\nvar_dump(in_array('..', $files));\nvar_dump(in_array('私はガラスを食べられますfile1.tmp', $files));\nvar_dump(in_array('私はガラスを食べられますfile2.tmp', $files));\ndelete_files($dir, 2, \"私はガラスを食べられますfile\");\n?>")).toMatchSnapshot();
  });
});
