// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cwd_mb_names.phpt
  it("Test chdir()/getcwd() with a dir for multibyte filenames", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$prefix = create_data(\"dir_mb\");\n$dirw = $prefix . DIRECTORY_SEPARATOR . \"テストマルチバイト・パス42\";\ntouch($dirw . DIRECTORY_SEPARATOR . \"dummy.txt\");\n$old_cp = get_active_cp();\nset_active_cp(65001);\n$oldcwd = getcwd();\nvar_dump(chdir($dirw));\nvar_dump(getcwd());\nvar_dump(file_exists(\"dummy.txt\"));\nset_active_cp($old_cp);\nchdir($oldcwd);\nremove_data(\"dir_mb\");\n?>")).toMatchSnapshot();
  });
});
