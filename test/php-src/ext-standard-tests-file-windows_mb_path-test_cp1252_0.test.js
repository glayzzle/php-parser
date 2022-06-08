// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp1252_0.phpt
  it("cp1252 cmd test", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp1252\n#vim: set encoding=cp1252\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = \"gef��\";\n$prefix = create_data(\"file\", $item, 1252);\n$fn = $prefix . DIRECTORY_SEPARATOR . $item;\nvar_dump($fn);\nvar_dump(touch($fn));\nvar_dump(file_exists($fn));\nsystem(\"dir /b \" . $fn);\nremove_data(\"file\");\n?>")).toMatchSnapshot();
  });
});
