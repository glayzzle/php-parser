// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/bug54028_2.phpt
  it("Bug #54028 realpath(\".\") return false", function () {
    expect(parser.parseCode("<?php\n/* This file is in UTF-8. */\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$prefix = __DIR__ . DIRECTORY_SEPARATOR . \"testBug54028_2\" . DIRECTORY_SEPARATOR;\n$dirs = array(\"a\", \"ソ\", \"ゾ\", \"şŞıİğĞ\", \"多国語\", \"王\", \"汚れて掘る\");\nmkdir($prefix);\nforeach ($dirs as $d) {\n    mkdir($prefix . $d);\n}\n$old_cwd = getcwd();\nforeach ($dirs as $d) {\n    $now = $prefix . $d;\n    var_dump(chdir($now));\n    var_dump($dn = realpath(\".\"));\n    var_dump($d == get_basename_with_cp($dn, 65001, false));\n}\nchdir($old_cwd);\nforeach ($dirs as $d) {\n    rmdir($prefix . $d);\n}\nrmdir($prefix);\n?>")).toMatchSnapshot();
  });
});
