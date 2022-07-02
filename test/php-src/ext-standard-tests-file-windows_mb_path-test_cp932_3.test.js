// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp932_3.phpt
  it("cp932 cmd test", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp932\n#vim: set encoding=cp932\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = \"�e�X�g�}���`�o�C�g�E�p�X77\"; // cp932 string\n$prefix = create_data(\"file_cp932\", $item, 932);\n$fn = $prefix . DIRECTORY_SEPARATOR . $item;\nvar_dump($fn);\nvar_dump(touch($fn));\nvar_dump(file_exists($fn));\nsystem(\"dir /b \" . $fn);\nremove_data(\"file_cp932\");\n?>")).toMatchSnapshot();
  });
});
