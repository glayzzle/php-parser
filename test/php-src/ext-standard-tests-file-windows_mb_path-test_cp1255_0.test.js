// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp1255_0.phpt
  it("Test fopen() for reading cp1255 path", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp1255\n#vim: set encoding=cp1255\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = \"����� ������\";\n$prefix = create_data(\"file_cp1255\", $item, 1255);\n$fn = $prefix . DIRECTORY_SEPARATOR . $item;\n$f = fopen($fn, 'r');\nif ($f) {\n    var_dump($f, fread($f, 42));\n    var_dump(fclose($f));\n} else {\n    echo \"open utf8 failed\\n\";\n}\nremove_data(\"file_cp1255\");\n?>")).toMatchSnapshot();
  });
});
