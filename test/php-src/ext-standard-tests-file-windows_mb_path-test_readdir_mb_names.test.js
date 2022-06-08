// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_readdir_mb_names.phpt
  it("Test readdir() with a dir for multibyte filenames", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$prefix = create_data(\"mb_names\");\n$content = \"\";\ncreate_verify_file($prefix, \"českýtestování.inc\", $content);\ncreate_verify_file($prefix, \"Röd_Statistics.txt\", $content);\ncreate_verify_file($prefix, \"š.txt\", \"\");\ncreate_verify_file($prefix, \"tschüß\", $content);\ncreate_verify_file($prefix, \"Voláçao\", \"hola\");\ncreate_verify_file($prefix, \"Ελλάδα.txt\", \"\");\ncreate_verify_file($prefix, \"привет\", \"opened an utf8 filename for reading\");\ncreate_verify_file($prefix, \"テストマルチバイト・パス\", $content);\ncreate_verify_file($prefix, \"測試多字節路徑\", $content);\ncreate_verify_file($prefix, \"żółć.txt\", $content);\ncreate_verify_dir($prefix, \"tschüß3\");\ncreate_verify_dir($prefix, \"Voláçao3\");\ncreate_verify_dir($prefix, \"привет3\");\ncreate_verify_dir($prefix, \"テストマルチバイト・パス42\");\ncreate_verify_dir($prefix, \"測試多字節路徑5\");\ncreate_verify_dir($prefix, \"żółć\");\n$dirw = $prefix . DIRECTORY_SEPARATOR;\n$old_cp = get_active_cp();\nset_active_cp(65001);\nif (is_dir($dirw)) {\n    if ($dh = opendir($dirw)) {\n        while (($file = readdir($dh)) !== false) {\n            echo \"filename: $file : filetype: \" . filetype($dirw . $file) . \"\\n\";\n        }\n        closedir($dh);\n    }\n} else {\n    echo \"is_dir failed\\n\";\n}\nset_active_cp($old_cp);\nremove_data(\"mb_names\");\n?>")).toMatchSnapshot();
  });
});
