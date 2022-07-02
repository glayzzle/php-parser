// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/chdir_basic.phpt
  it("Test chdir() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of chdir() with absolute and relative paths\n */\necho \"*** Testing chdir() : basic functionality ***\\n\";\n$base_dir_path = __DIR__;\n$level1_one_dir_name = \"level1_one\";\n$level1_one_dir_path = \"$base_dir_path/$level1_one_dir_name\";\n$level1_two_dir_name = \"level1_two\";\n$level1_two_dir_path = \"$base_dir_path/$level1_one_dir_name/$level1_two_dir_name\";\n// create directories\nmkdir($level1_one_dir_path);\nmkdir($level1_two_dir_path);\necho \"\\n-- Testing chdir() with absolute path: --\\n\";\nchdir($base_dir_path);\nvar_dump(chdir($level1_one_dir_path));\nvar_dump(getcwd());\necho \"\\n-- Testing chdir() with relative paths: --\\n\";\nvar_dump(chdir($level1_two_dir_name));\nvar_dump(getcwd());\n?>")).toMatchSnapshot();
  });
});
