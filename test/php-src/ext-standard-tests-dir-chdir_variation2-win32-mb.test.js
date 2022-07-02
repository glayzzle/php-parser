// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/chdir_variation2-win32-mb.phpt
  it("Test chdir() function : usage variations - relative paths", function () {
    expect(parser.parseCode("<?php\n/*\n * Test chdir() with variations of relative paths\n */\necho \"*** Testing chdir() : usage variations ***\\n\";\n$base_dir_path = __DIR__ . '/chdir_variation2-win32-mb';\n@mkdir($base_dir_path);\n$level_one_dir_name = \"私はガラスを食べられますlevel_one\";\n$level_one_dir_path = \"$base_dir_path/$level_one_dir_name\";\n$level_two_dir_name = \"私はガラスを食べられますlevel_two\";\n$level_two_dir_path = \"$base_dir_path/$level_one_dir_name/$level_two_dir_name\";\n// create directories\nmkdir($level_one_dir_path);\nmkdir($level_two_dir_path);\necho \"\\n-- \\$directory = './私はガラスを食べられますlevel_one': --\\n\";\nvar_dump(chdir($base_dir_path));\nvar_dump(chdir(\"./$level_one_dir_name\"));\nvar_dump(getcwd());\necho \"\\n-- \\$directory = '私はガラスを食べられますlevel_one/私はガラスを食べられますlevel_two': --\\n\";\nvar_dump(chdir($base_dir_path));\nvar_dump(chdir(\"$level_one_dir_name/$level_two_dir_name\"));\nvar_dump(getcwd());\necho \"\\n-- \\$directory = '..': --\\n\";\nvar_dump(chdir('..'));\nvar_dump(getcwd());\necho \"\\n-- \\$directory = '私はガラスを食べられますlevel_two', '.': --\\n\";\nvar_dump(chdir($level_two_dir_path));\nvar_dump(chdir('.'));\nvar_dump(getcwd());\necho \"\\n-- \\$directory = '../': --\\n\";\nvar_dump(chdir('../'));\nvar_dump(getcwd());\necho \"\\n-- \\$directory = './': --\\n\";\nvar_dump(chdir($level_two_dir_path));\nvar_dump(chdir('./'));\nvar_dump(getcwd());\necho \"\\n-- \\$directory = '../../'私はガラスを食べられますlevel_one': --\\n\";\nvar_dump(chdir($level_two_dir_path));\nvar_dump(chdir(\"../../$level_one_dir_name\"));\nvar_dump(getcwd());\n?>")).toMatchSnapshot();
  });
});
