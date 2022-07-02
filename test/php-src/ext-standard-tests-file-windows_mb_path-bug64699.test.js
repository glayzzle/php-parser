// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/bug64699.phpt
  it("Bug #64699 is_dir() is inaccurate result on Windows with japanese locale.", function () {
    expect(parser.parseCode("<?php\n/* This file is in UTF-8. */\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$old_cp = get_active_cp();\nset_active_cp(65001);\n$prefix = __DIR__ . DIRECTORY_SEPARATOR . \"testBug64699\" . DIRECTORY_SEPARATOR;\n$dirs = array(\"a\", \"ソ\", \"ゾ\", \"şŞıİğĞ\", \"多国語\", \"表\");\nmkdir($prefix);\nforeach ($dirs as $d) {\n    mkdir($prefix . $d);\n}\n$dir = $prefix;\nif ($dh = opendir($dir)) {\n    while (($file = readdir($dh)) !== false) {\n        $path = $dir . $file;\n        $type = filetype($path);\n        $type2= is_dir($path) ? 'dir' : 'file';\n        $comp = $type == $type2 ? 'OK' : 'NG';\n        echo \"filetype()[\".str_pad($type, 4).\"] == is_dir()[\".str_pad($type2, 4).\"] -> $comp: {$file}\\n\";\n    }\n    closedir($dh);\n}\nforeach ($dirs as $d) {\n    rmdir($prefix . $d);\n}\nrmdir($prefix);\nset_active_cp($old_cp);\n?>")).toMatchSnapshot();
  });
});
