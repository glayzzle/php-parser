// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_links/bug73962.phpt
  it("Bug #73962 bug with symlink related to cyrillic directory", function () {
    expect(parser.parseCode("<?php\ninclude_once __DIR__ . '/common.inc';\n$mountvol = get_mountvol();\n$old_dir = __DIR__;\n$dirname = '\"' . __DIR__ . \"\\\\mnt\\\\test\\\\новая папка\" . '\"';\nexec(\"mkdir \" . $dirname, $output, $ret_val);\nchdir(__DIR__ . \"\\\\mnt\\\\test\");\n$drive = substr(__DIR__, 0, 2);\n$pathwithoutdrive = substr(__DIR__, 2);\n$ret = exec($mountvol . \" \" . $drive . \" /L\", $output, $ret_val);\nexec(\"mklink /d mounted_volume \" . $ret, $output, $ret_val);\n$fullpath = \"mounted_volume\" . $pathwithoutdrive;\nexec(\"mklink /d mklink_symlink \\\"новая папка\\\"\", $output, $ret_val);\nfile_put_contents(\"mklink_symlink\\\\a.php\", \"<?php echo \\\"I am included.\\n\\\" ?>\");\nfile_put_contents(\"$fullpath\\\\mnt\\\\test\\\\новая папка\\\\b.php\", \"<?php echo \\\"I am included.\\n\\\" ?>\");\nvar_dump(scandir(\"mklink_symlink\"));\nvar_dump(scandir(\"$fullpath\\\\mnt\\\\test\\\\новая папка\"));\nvar_dump(scandir(\"$fullpath\\\\mnt\\\\test\\\\mklink_symlink\"));\nvar_dump(is_readable(\"$fullpath\\\\mnt\\\\test\\\\mklink_symlink\\b.php\"));\nunlink(\"$fullpath\\\\mnt\\\\test\\\\новая папка\\\\b.php\");\nunlink(\"mklink_symlink\\\\a.php\");\nchdir($old_dir);\nrmdir(__DIR__ . \"\\\\mnt\\\\test\\\\новая папка\");\nrmdir(__DIR__ . \"\\\\mnt\\\\test\\\\mklink_symlink\");\nrmdir(__DIR__ . \"\\\\mnt\\\\test\\\\mounted_volume\");\nrmdir(__DIR__ . \"\\\\mnt\\\\test\");\nrmdir(__DIR__ . \"\\\\mnt\");\n?>")).toMatchSnapshot();
  });
});
