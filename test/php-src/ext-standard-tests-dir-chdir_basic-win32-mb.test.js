// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/chdir_basic-win32-mb.phpt
  it("Test chdir() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of chdir() with absolute and relative paths\n */\necho \"*** Testing chdir() : basic functionality ***\\n\";\n$base_dir_path = __DIR__ . '/chdir_basic-win32-mb';\n@mkdir($base_dir_path);\n$level_one_dir_name = \"私はガラスを食べられますlevel_one\";\n$level_one_dir_path = \"$base_dir_path/$level_one_dir_name\";\n$level_two_dir_name = \"私はガラスを食べられますlevel_two\";\n$level_two_dir_path = \"$base_dir_path/$level_one_dir_name/$level_two_dir_name\";\n// create directories\nmkdir($level_one_dir_path);\nmkdir($level_two_dir_path);\necho \"\\n-- Testing chdir() with absolute path: --\\n\";\nchdir($base_dir_path);\nvar_dump(chdir($level_one_dir_path));\nvar_dump(getcwd());\necho \"\\n-- Testing chdir() with relative paths: --\\n\";\nvar_dump(chdir($level_two_dir_name));\nvar_dump(getcwd());\n?>")).toMatchSnapshot();
  });
});
