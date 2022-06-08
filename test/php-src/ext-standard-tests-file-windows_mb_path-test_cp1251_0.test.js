// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp1251_0.phpt
  it("Test fopen() for reading CP1251 path", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp1251\n#vim: set encoding=cp1251\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = \"������\"; // cp1251 string\n$prefix = create_data(\"file_cp1251\", $item, 1251);\n$fn = $prefix . DIRECTORY_SEPARATOR . $item;\n$f = fopen($fn, 'r');\nif ($f) {\n    var_dump($f, fread($f, 42));\n    var_dump(fclose($f));\n} else {\n    echo \"open utf8 failed\\n\";\n}\nremove_data(\"file_cp1251\");\n?>")).toMatchSnapshot();
  });
});
