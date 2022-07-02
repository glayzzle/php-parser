// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp874_1.phpt
  it("Thai cp874 cmd test", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp874\n#vim: set encoding=cp874\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = \"�������跴�ͺ11\";\n$prefix = create_data(\"file_cp874\", $item, 874);\n$fn = __DIR__ . DIRECTORY_SEPARATOR . $item;\nvar_dump($fn);\nvar_dump(touch($fn));\nvar_dump(file_exists($fn));\nsystem(\"dir /b \" . $fn);\nremove_data(\"file_cp874\");\n?>")).toMatchSnapshot();
  });
});
