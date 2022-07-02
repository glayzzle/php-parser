// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_links/bug48746_2.phpt
  it("Bug#48746 - Junction not working properly", function () {
    expect(parser.parseCode("<?php\ninclude_once __DIR__ . '/common.inc';\n$mountvol = get_mountvol();\n$old_dir = __DIR__;\n$dirname = __DIR__ . \"\\\\mnt\\\\test\\\\directory\";\nexec(\"mkdir \" . $dirname, $output, $ret_val);\nchdir(__DIR__ . \"\\\\mnt\\\\test\");\n$drive = substr(__DIR__, 0, 2);\n$pathwithoutdrive = substr(__DIR__, 2);\n$ret = exec($mountvol . \" \" . $drive . \" /L\", $output, $ret_val);\nexec(\"mklink /j mounted_volume \" . $ret, $output, $ret_val);\n$fullpath = \"mounted_volume\" . $pathwithoutdrive;\nexec(\"mklink /j mklink_junction directory\", $output, $ret_val);\nfile_put_contents(\"mklink_junction\\\\a.php\", \"<?php echo \\\"I am included.\\n\\\" ?>\");\nfile_put_contents(\"$fullpath\\\\mnt\\\\test\\\\directory\\\\b.php\", \"<?php echo \\\"I am included.\\n\\\" ?>\");\nprint_r(scandir(\"mklink_junction\"));\nprint_r(scandir(\"$fullpath\\\\mnt\\\\test\\\\directory\"));\nprint_r(scandir(\"$fullpath\\\\mnt\\\\test\\\\mklink_junction\"));\nunlink(\"$fullpath\\\\mnt\\\\test\\\\directory\\\\b.php\");\nunlink(\"mklink_junction\\\\a.php\");\nchdir($old_dir);\nrmdir(__DIR__ . \"\\\\mnt\\\\test\\\\directory\");\nrmdir(__DIR__ . \"\\\\mnt\\\\test\\\\mklink_junction\");\nrmdir(__DIR__ . \"\\\\mnt\\\\test\\\\mounted_volume\");\nrmdir(__DIR__ . \"\\\\mnt\\\\test\");\nrmdir(__DIR__ . \"\\\\mnt\");\n?>")).toMatchSnapshot();
  });
});
