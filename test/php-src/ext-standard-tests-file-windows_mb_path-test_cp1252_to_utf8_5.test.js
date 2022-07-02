// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp1252_to_utf8_5.phpt
  it("Test fopen() for write cp1252 to UTF-8 path", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp1252\n#vim: set encoding=cp1252\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = iconv('cp1252', 'utf-8', \"Vol��ao\"); // cp1252 string\n$prefix = create_data(\"dir2_cp1252\", \"${item}3\");\n$fn = $prefix . DIRECTORY_SEPARATOR . \"${item}7\";\n$f = fopen($fn, 'w');\nif ($f) {\n    var_dump($f, fwrite($f, \"writing to an mb filename\"));\n    var_dump(fclose($f));\n} else {\n    echo \"open utf8 failed\\n\";\n}\nvar_dump(file_get_contents($fn));\nget_basename_with_cp($fn, 65001);\nvar_dump(unlink($fn));\nremove_data(\"dir2_cp1252\");\n?>")).toMatchSnapshot();
  });
});
