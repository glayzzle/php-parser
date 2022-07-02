// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp932_2.phpt
  it("Test fopen() for write to cp932 path", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp932\n#vim: set encoding=cp932\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = \"�e�X�g�}���`�o�C�g�E�p�X\"; // cp932 string\n$prefix = create_data(\"dir_cp932\", \"${item}42}\", 932);\n$fn = $prefix . DIRECTORY_SEPARATOR . \"${item}33\";\n$f = fopen($fn, 'w');\nif ($f) {\n    var_dump($f, fwrite($f, \"writing to an mb filename\"));\n    var_dump(fclose($f));\n} else {\n    echo \"open utf8 failed\\n\";\n}\nvar_dump(file_get_contents($fn));\nget_basename_with_cp($fn, 932);\nremove_data(\"dir_cp932\");\n?>")).toMatchSnapshot();
  });
});
