// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/bug75063_cp1251.phpt
  it("Bug #75063 Many filesystem-related functions do not work with multibyte file names, cp1251", function () {
    expect(parser.parseCode("<?php\n/* This file is in cp1251. */\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$dir_basename = \"����\";\n$prefix = __DIR__ . DIRECTORY_SEPARATOR . \"bug75063-cp1251\";\n$d0 = $prefix . DIRECTORY_SEPARATOR . $dir_basename;\nmkdir($prefix);\ncreate_verify_dir($prefix, $dir_basename, 1251);\nvar_dump(get_basename_with_cp($d0, 1251, false));\n$old_cwd = getcwd();\nvar_dump(chdir($d0));\n$code = <<<CODE\n<?php\nforeach([\"test\", \"����\"] as \\$fn) {\n    file_put_contents(\"\\$fn.txt\", \"\");\n}\nvar_dump(getcwd());\nif (\\$dh = opendir(getcwd())) {\n    while ((\\$file = readdir(\\$dh)) !== false) {\n        if (\".\" == \\$file || \"..\" == \\$file) continue;\n        var_dump(\\$file);\n    }\n    closedir(\\$dh);\n}\nCODE;\n$code_fn = \"code.php\";\nfile_put_contents($code_fn, $code);\nprint(shell_exec(getenv('TEST_PHP_EXECUTABLE') . \" -n -d default_charset=cp1251 -f code.php\"));\nchdir($old_cwd);\n/*--CLEAN-- section were the right place, but it won't accept default_charset ATM, it seems. */\n$dir_basename = \"����\";\n$prefix = __DIR__ . DIRECTORY_SEPARATOR . \"bug75063-cp1251\";\n$d0 = $prefix . DIRECTORY_SEPARATOR . $dir_basename;\n$obj = scandir($d0);\nforeach ($obj as $file) {\n\tif (\".\" == $file || \"..\" == $file) continue;\n\tunlink($d0 . DIRECTORY_SEPARATOR . $file);\n}\nrmdir($d0);\nrmdir($prefix);\n?>")).toMatchSnapshot();
  });
});
