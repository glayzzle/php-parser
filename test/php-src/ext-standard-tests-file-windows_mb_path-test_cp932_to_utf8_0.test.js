// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp932_to_utf8_0.phpt
  it("Test fopen() for reading cp932 to UTF-8 path", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp932\n#vim: set encoding=cp932\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = iconv('cp932', 'utf-8', \"�e�X�g�}���`�o�C�g�E�p�X\"); // cp932 string\n$prefix = create_data(\"file_cp932\", $item);\n$fn = $prefix . DIRECTORY_SEPARATOR . $item;\n$f = fopen($fn, 'r');\nif ($f) {\n    var_dump($f, fread($f, 42));\n    var_dump(fclose($f));\n} else {\n    echo \"open utf8 failed\\n\";\n}\nremove_data(\"file_cp932\");\n?>")).toMatchSnapshot();
  });
});
