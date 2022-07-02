// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp936_2.phpt
  it("Test fopen() for write cp936 path", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp936\n#vim: set encoding=cp936\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = \"�yԇ���ֹ�·��\"; // cp936 string\n$prefix = create_data(\"file_cp936\", $item . \"25\", 936);\n$fn = $prefix . DIRECTORY_SEPARATOR . \"{$item}25\";\n$f = fopen($fn, 'w');\nif ($f) {\n    var_dump($f, fwrite($f, \"writing to an mb filename\"));\n    var_dump(fclose($f));\n} else {\n    echo \"open utf8 failed\\n\";\n}\nvar_dump(file_get_contents($fn));\nget_basename_with_cp($fn, 936);\nvar_dump(unlink($fn));\nremove_data(\"file_cp936\");\n?>")).toMatchSnapshot();
  });
});
