// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp1250_to_utf8_1.phpt
  it("Test mkdir/rmdir UTF-8 path with cp1250 specific symbols", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp1250\n#vim: set encoding=cp1250\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = \"šđčćž_ŠĐČĆŽ\"; // cp1250 specific chars\n$prefix = create_data(\"dir_cp1250\", \"${item}42\");\n$path = $prefix . DIRECTORY_SEPARATOR . \"${item}42\";\n$subpath = $path . DIRECTORY_SEPARATOR . \"${item}4\";\n/* The mb dirname exists*/\nvar_dump(file_exists($path));\nvar_dump(mkdir($subpath));\nvar_dump(file_exists($subpath));\nget_basename_with_cp($subpath, 65001);\nvar_dump(rmdir($subpath));\nremove_data(\"dir_cp1250\");\n?>")).toMatchSnapshot();
  });
});
