// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/opendir_basic.phpt
  it("Test opendir() function : basic functionality", function () {
    expect(parser.parseCode("<?php\n/*\n * Test basic functionality of opendir() with absolute and relative paths as $path argument\n */\necho \"*** Testing opendir() : basic functionality ***\\n\";\n$base_dir_path = __DIR__ . '/opendir_basic';\n@mkdir($base_dir_path);\n$level_one_dir_name = \"level_one\";\n$level_one_dir_path = \"$base_dir_path/$level_one_dir_name\";\n$level_two_dir_name = \"level_two\";\n$level_two_dir_path = \"$base_dir_path/$level_one_dir_name/$level_two_dir_name\";\n// create temporary directories - will remove in CLEAN section\nmkdir($level_one_dir_path);\nmkdir($level_two_dir_path);\necho \"\\n-- Testing opendir() with absolute path: --\\n\";\nvar_dump($dh1 = opendir($level_one_dir_path));\necho \"\\n-- Testing opendir() with relative paths: --\\n\";\nvar_dump(chdir($level_one_dir_path));\nvar_dump($dh2 = opendir($level_two_dir_name));\necho \"\\n-- Close directory handles: --\\n\";\nclosedir($dh1);\nvar_dump($dh1);\nclosedir($dh2);\nvar_dump($dh2);\n?>")).toMatchSnapshot();
  });
});
