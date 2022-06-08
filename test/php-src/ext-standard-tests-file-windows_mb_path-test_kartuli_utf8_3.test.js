// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_kartuli_utf8_3.phpt
  it("Kartuli UTF-8 cmd test", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp874\n#vim: set encoding=cp874\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = \"ქართველები55\";\n$prefix = create_data(\"file_kartuli\", $item);\n$fn = $prefix . DIRECTORY_SEPARATOR . $item;\nvar_dump($fn);\nvar_dump(touch($fn));\nvar_dump(file_exists($fn));\nsystem(\"dir /b \" . $fn);\nremove_data(\"file_kartuli\");\n?>")).toMatchSnapshot();
  });
});
