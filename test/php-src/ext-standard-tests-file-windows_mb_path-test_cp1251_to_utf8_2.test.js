// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp1251_to_utf8_2.phpt
  it("Test fopen() for write CP1251 to UTF-8 path", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp1251\n#vim: set encoding=cp1251\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = iconv('cp1251', 'utf-8', \"������\"); // cp1251 string\n$prefix = create_data(\"file_cp1251\", $item . \"7\");\n$fn = $prefix . DIRECTORY_SEPARATOR . \"${item}7\";\n$f = fopen($fn, 'w');\nif ($f) {\n    var_dump($f, fwrite($f, \"writing to an mb filename\"));\n    var_dump(fclose($f));\n} else {\n    echo \"open utf8 failed\\n\";\n}\nvar_dump(file_get_contents($fn));\nget_basename_with_cp($fn, 65001);\nvar_dump(unlink($fn));\nremove_data(\"file_cp1251\");\n?>")).toMatchSnapshot();
  });
});
