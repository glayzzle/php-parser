// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_eucjp_to_utf8_2.phpt
  it("Test fopen() for write eucjp to UTF-8 path", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=eucjp\n#vim: set encoding=eucjp\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = iconv('eucjp', 'utf-8', \"�ƥ��ȥޥ���Х��ȡ��ѥ�\"); // EUCJP string\n$prefix = create_data(\"dir_eucjp\", \"${item}42}\");\n$fn = $prefix . DIRECTORY_SEPARATOR . \"${item}33\";\n$f = fopen($fn, 'w');\nif ($f) {\n    var_dump($f, fwrite($f, \"writing to an mb filename\"));\n    var_dump(fclose($f));\n} else {\n    echo \"open utf8 failed\\n\";\n}\nvar_dump(file_get_contents($fn));\nget_basename_with_cp($fn, 65001);\nremove_data(\"dir_eucjp\");\n?>")).toMatchSnapshot();
  });
});
