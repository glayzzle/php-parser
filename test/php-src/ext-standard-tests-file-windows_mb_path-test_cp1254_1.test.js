// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp1254_1.phpt
  it("Test mkdir/rmdir cp1254 to UTF-8 path", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp1254\n#vim: set encoding=cp1254\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = \"�okbaytl� i�leri\";\n$prefix = create_data(\"dir_cp1254\", \"${item}42\", 1254);\n$path = $prefix . DIRECTORY_SEPARATOR . \"${item}42\";\n$subpath = $path . DIRECTORY_SEPARATOR . \"${item}4\";\n/* The mb dirname exists*/\nvar_dump(file_exists($path));\nvar_dump(mkdir($subpath));\nvar_dump(file_exists($subpath));\nget_basename_with_cp($subpath, 1254);\nvar_dump(rmdir($subpath));\nremove_data(\"dir_cp1254\");\n?>")).toMatchSnapshot();
  });
});
