// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp936_1.phpt
  it("Test mkdir/rmdir cp936 path", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp936\n#vim: set encoding=cp936\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = \"�yԇ���ֹ�·��\"; // cp936 string\n$prefix = create_data(\"dir_cp936\", $item . \"5\", 936);\n$path = $prefix . DIRECTORY_SEPARATOR . \"${item}5\";\n$subpath = $path . DIRECTORY_SEPARATOR . \"${item}4\";\n/* The mb dirname exists*/\nvar_dump(file_exists($path));\nvar_dump(mkdir($subpath));\nvar_dump(file_exists($subpath));\nget_basename_with_cp($subpath, 936);\nvar_dump(rmdir($subpath));\nremove_data(\"dir_cp936\");\n?>")).toMatchSnapshot();
  });
});
