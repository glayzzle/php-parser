// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp1253_0.phpt
  it("Test fopen() for reading cp1253 path", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp1253\n#vim: set encoding=cp1253\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = \"�������� �������\";\n$prefix = create_data(\"file_cp1253\", $item, 1253);\n$fn = $prefix . DIRECTORY_SEPARATOR . $item;\n$f = fopen($fn, 'r');\nif ($f) {\n    var_dump($f, fread($f, 42));\n    var_dump(fclose($f));\n} else {\n    echo \"open utf8 failed\\n\";\n}\nremove_data(\"file_cp1253\");\n?>")).toMatchSnapshot();
  });
});
