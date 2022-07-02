// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/dir/scandir_variation4.phpt
  it("Test scandir() function : usage variations - different relative paths", function () {
    expect(parser.parseCode("<?php\n/*\n * Test scandir() with relative paths as $dir argument\n */\necho \"*** Testing scandir() : usage variations ***\\n\";\n// include for create_files/delete_files functions\ninclude (__DIR__ . '/../file/file.inc');\n$base_dir_path = __DIR__ . '/scandir_variation4';\n@mkdir($base_dir_path);\n$level_one_dir_path = \"$base_dir_path/level_one\";\n$level_two_dir_path = \"$level_one_dir_path/level_two\";\n// create directories and files\nmkdir($level_one_dir_path);\ncreate_files($level_one_dir_path, 2, 'numeric', 0755, 1, 'w', 'level_one', 1);\nmkdir($level_two_dir_path);\ncreate_files($level_two_dir_path, 2, 'numeric', 0755, 1, 'w', 'level_two', 1);\necho \"\\n-- \\$path = './level_one': --\\n\";\nvar_dump(chdir($base_dir_path));\nvar_dump(scandir('./level_one'));\necho \"\\n-- \\$path = 'level_one/level_two': --\\n\";\nvar_dump(chdir($base_dir_path));\nvar_dump(scandir('level_one/level_two'));\necho \"\\n-- \\$path = '..': --\\n\";\nvar_dump(chdir($level_two_dir_path));\nvar_dump(scandir('..'));\necho \"\\n-- \\$path = 'level_two', '.': --\\n\";\nvar_dump(chdir($level_two_dir_path));\nvar_dump(scandir('.'));\necho \"\\n-- \\$path = '../': --\\n\";\nvar_dump(chdir($level_two_dir_path));\nvar_dump(scandir('../'));\necho \"\\n-- \\$path = './': --\\n\";\nvar_dump(chdir($level_two_dir_path));\nvar_dump(scandir('./'));\necho \"\\n-- \\$path = '../../'level_one': --\\n\";\nvar_dump(chdir($level_two_dir_path));\nvar_dump(scandir('../../level_one'));\n@delete_files($level_one_dir_path, 2, 'level_one');\n@delete_files($level_two_dir_path, 2, 'level_two');\n?>")).toMatchSnapshot();
  });
});
