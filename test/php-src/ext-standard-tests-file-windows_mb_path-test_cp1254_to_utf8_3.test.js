// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp1254_to_utf8_3.phpt
  it("cp1254 cmd test", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp1254\n#vim: set encoding=cp1254\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = \"çokbaytlı işleri\";\n$prefix = create_data(\"file_cp1254\", $item);\n$fn = $prefix . DIRECTORY_SEPARATOR . $item;\nvar_dump($fn);\nvar_dump(touch($fn));\nvar_dump(file_exists($fn));\nsystem(\"dir /b \\\"\" . $fn . \"\\\"\");\nremove_data(\"file_cp1254\");\n?>")).toMatchSnapshot();
  });
});
