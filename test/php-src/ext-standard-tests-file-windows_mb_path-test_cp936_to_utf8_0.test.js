// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp936_to_utf8_0.phpt
  it("Test fopen() for reading cp936 to UTF-8 path", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp936\n#vim: set encoding=cp936\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = iconv('cp936', 'utf-8', \"�yԇ���ֹ�·��\"); // cp936 string\n$prefix = create_data(\"file_cp936\", $item);\n$fn = $prefix . DIRECTORY_SEPARATOR . \"$item\";\n$f = fopen($fn, 'r');\nif ($f) {\n    var_dump($f, fread($f, 42));\n    var_dump(fclose($f));\n} else {\n    echo \"open utf8 failed\\n\";\n}\nremove_data(\"file_cp936\");\n?>")).toMatchSnapshot();
  });
});
