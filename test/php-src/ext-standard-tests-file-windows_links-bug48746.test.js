// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_links/bug48746.phpt
  it("Bug#48746 - Junction not working properly", function () {
    expect(parser.parseCode("<?php\ninclude_once __DIR__ . '/common.inc';\n$mountvol = get_mountvol();\n$old_dir = __DIR__;\n$dirname = __DIR__ . \"\\\\mnt\\\\test\\\\directory\";\nmkdir($dirname, 0700, true);\nchdir(__DIR__ . \"\\\\mnt\\\\test\");\n$drive = substr(__DIR__, 0, 2);\n$pathwithoutdrive = substr(__DIR__, 2);\n$ret = exec($mountvol . \" \" . $drive . \" /L\", $output, $ret_val);\nexec(\"mklink /j mounted_volume \" . $ret, $output, $ret_val);\n$fullpath = \"mounted_volume\" . $pathwithoutdrive;\nexec(\"mklink /j mklink_junction directory\", $output, $ret_val);\nvar_dump(file_exists(\"directory\"));\nvar_dump(file_exists(\"mklink_junction\"));\nvar_dump(file_exists(\"mounted_volume\"));\nvar_dump(file_exists(\"$fullpath\"));\nvar_dump(is_dir(\"mklink_junction\"));\nvar_dump(is_dir(\"$fullpath\"));\nvar_dump(is_readable(\"mklink_junction\"));\nvar_dump(is_writeable(\"$fullpath\"));\nchdir($old_dir);\nrmdir(__DIR__ . \"\\\\mnt\\\\test\\\\directory\");\nrmdir(__DIR__ . \"\\\\mnt\\\\test\\\\mklink_junction\");\nrmdir(__DIR__ . \"\\\\mnt\\\\test\\\\mounted_volume\");\nrmdir(__DIR__ . \"\\\\mnt\\\\test\");\nrmdir(__DIR__ . \"\\\\mnt\");\n?>")).toMatchSnapshot();
  });
});
