// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/scandir_basic-win32-mb.phpt
  it("Test scandir() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of scandir()\n */\necho \"*** Testing scandir() : basic functionality ***\\n\";\n// include file.inc for create_files function\ninclude (__DIR__ . '/../file/file.inc');\n// set up directory\n$directory = __DIR__ . '/私はガラスを食べられますscandir_basic';\nmkdir($directory);\ncreate_files($directory, 3, \"numeric\", 0755, 1, \"w\", \"私はガラスを食べられますfile\");\necho \"\\n-- scandir() with mandatory arguments --\\n\";\nvar_dump(scandir($directory));\necho \"\\n-- scandir() with all arguments --\\n\";\n$sorting_order = SCANDIR_SORT_DESCENDING;\n$context = stream_context_create();\nvar_dump(scandir($directory, $sorting_order, $context));\ndelete_files($directory, 3, \"私はガラスを食べられますfile\");\n?>")).toMatchSnapshot();
  });
});
