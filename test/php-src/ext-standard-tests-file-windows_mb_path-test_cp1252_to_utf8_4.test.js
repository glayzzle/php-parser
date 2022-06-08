// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp1252_to_utf8_4.phpt
  it("Test mkdir/rmdir cp1252 to UTF-8 path", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp1252\n#vim: set encoding=cp1252\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = iconv('cp1252', 'utf-8', \"Vol��ao\"); // cp1252 string\n$prefix = create_data(\"dir2_cp1252\", \"${item}3\");\n$path = $prefix . DIRECTORY_SEPARATOR . \"${item}3\";\n$subpath = $path . DIRECTORY_SEPARATOR . \"${item}4\";\n/* The mb dirname exists*/\nvar_dump(file_exists($path));\nvar_dump(mkdir($subpath));\nvar_dump(file_exists($subpath));\nget_basename_with_cp($subpath, 65001);\nvar_dump(rmdir($subpath));\nremove_data(\"dir2_cp1252\");\n?>")).toMatchSnapshot();
  });
});
