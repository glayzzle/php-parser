// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/chdir_variation2.phpt
  it("Test chdir() function : usage variations - relative paths", function () {
    expect(parser.parseCode("<?php\n/*\n * Test chdir() with variations of relative paths\n */\necho \"*** Testing chdir() : usage variations ***\\n\";\n$base_dir_path = __DIR__;\n$level2_one_dir_name = \"level2_one\";\n$level2_one_dir_path = \"$base_dir_path/$level2_one_dir_name\";\n$level2_two_dir_name = \"level2_two\";\n$level2_two_dir_path = \"$base_dir_path/$level2_one_dir_name/$level2_two_dir_name\";\n// create directories\nmkdir($level2_one_dir_path);\nmkdir($level2_two_dir_path);\necho \"\\n-- \\$directory = './level2_one': --\\n\";\nvar_dump(chdir($base_dir_path));\nvar_dump(chdir(\"./$level2_one_dir_name\"));\nvar_dump(getcwd());\necho \"\\n-- \\$directory = 'level2_one/level2_two': --\\n\";\nvar_dump(chdir($base_dir_path));\nvar_dump(chdir(\"$level2_one_dir_name/$level2_two_dir_name\"));\nvar_dump(getcwd());\necho \"\\n-- \\$directory = '..': --\\n\";\nvar_dump(chdir('..'));\nvar_dump(getcwd());\necho \"\\n-- \\$directory = 'level2_two', '.': --\\n\";\nvar_dump(chdir($level2_two_dir_path));\nvar_dump(chdir('.'));\nvar_dump(getcwd());\necho \"\\n-- \\$directory = '../': --\\n\";\nvar_dump(chdir('../'));\nvar_dump(getcwd());\necho \"\\n-- \\$directory = './': --\\n\";\nvar_dump(chdir($level2_two_dir_path));\nvar_dump(chdir('./'));\nvar_dump(getcwd());\necho \"\\n-- \\$directory = '../../'level2_one': --\\n\";\nvar_dump(chdir($level2_two_dir_path));\nvar_dump(chdir(\"../../$level2_one_dir_name\"));\nvar_dump(getcwd());\n?>")).toMatchSnapshot();
  });
});
