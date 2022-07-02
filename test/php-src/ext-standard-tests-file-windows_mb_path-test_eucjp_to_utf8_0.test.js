// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_eucjp_to_utf8_0.phpt
  it("Test fopen() for reading eucjp to UTF-8 path", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=eucjp\n#vim: set encoding=eucjp\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = iconv('eucjp', 'utf-8', \"�ƥ��ȥޥ���Х��ȡ��ѥ�\"); // EUCJP string\n$prefix = create_data(\"file_eucjp\", $item);\n$fn = $prefix . DIRECTORY_SEPARATOR . $item;\n$f = fopen($fn, 'r');\nif ($f) {\n    var_dump($f, fread($f, 42));\n    var_dump(fclose($f));\n} else {\n    echo \"open utf8 failed\\n\";\n}\nremove_data(\"file_eucjp\");\n?>")).toMatchSnapshot();
  });
});
