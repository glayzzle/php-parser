// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/bug75063_utf8.phpt
  it("Bug #75063 Many filesystem-related functions do not work with multibyte file names, UTF-8", function () {
    expect(parser.parseCode("<?php\n/* This file is in UTF-8. */\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$dir_basename = \"тест\";\n$prefix = __DIR__ . DIRECTORY_SEPARATOR . \"bug75063-utf8\";\n$d0 = $prefix . DIRECTORY_SEPARATOR . $dir_basename;\nmkdir($prefix);\ncreate_verify_dir($prefix, $dir_basename);\nvar_dump(get_basename_with_cp($d0, 65001, false));\n$old_cwd = getcwd();\nvar_dump(chdir($d0));\n$code = <<<CODE\n<?php\nforeach([\"test\", \"таст\"] as \\$fn) {\n    file_put_contents(\"\\$fn.txt\", \"\");\n}\nvar_dump(getcwd());\nif (\\$dh = opendir(getcwd())) {\n    while ((\\$file = readdir(\\$dh)) !== false) {\n        if (\".\" == \\$file || \"..\" == \\$file) continue;\n        var_dump(\\$file);\n    }\n    closedir(\\$dh);\n}\nCODE;\n$code_fn = \"code.php\";\nfile_put_contents($code_fn, $code);\nprint(shell_exec(getenv('TEST_PHP_EXECUTABLE') . \" -nf code.php\"));\nchdir($old_cwd);\n?>")).toMatchSnapshot();
  });
});
