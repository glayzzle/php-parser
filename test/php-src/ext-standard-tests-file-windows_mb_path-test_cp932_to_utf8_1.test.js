// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp932_to_utf8_1.phpt
  it("Test mkdir/rmdir cp932 to UTF-8 path", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp932\n#vim: set encoding=cp932\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = iconv('cp932', 'utf-8', \"�e�X�g�}���`�o�C�g�E�p�X\"); // cp932 string\n$prefix = create_data(\"dir_cp932\", \"${item}42\");\n$path = $prefix . DIRECTORY_SEPARATOR . \"${item}42\";\n$subpath = $path . DIRECTORY_SEPARATOR . \"${item}4\";\n/* The mb dirname exists*/\nvar_dump(file_exists($path));\nvar_dump(mkdir($subpath));\nvar_dump(file_exists($subpath));\nget_basename_with_cp($subpath, 65001);\nvar_dump(rmdir($subpath));\nremove_data(\"dir_cp932\");\n?>")).toMatchSnapshot();
  });
});
