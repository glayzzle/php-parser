// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_kartuli_utf8_1.phpt
  it("Test mkdir/rmdir Kartuli UTF-8 path", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=utf-8\n#vim: set encoding=utf-8\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = \"ქართველები\";\n$prefix = create_data(\"dir_kartuli\", \"${item}42\");\n$path = $prefix . DIRECTORY_SEPARATOR . \"${item}42\";\n$subpath = $path . DIRECTORY_SEPARATOR . \"${item}4\";\n/* The mb dirname exists*/\nvar_dump(file_exists($path));\nvar_dump(mkdir($subpath));\nvar_dump(file_exists($subpath));\nget_basename_with_cp($subpath, 65001);\nvar_dump(rmdir($subpath));\nremove_data(\"dir_kartuli\");\n?>")).toMatchSnapshot();
  });
});
