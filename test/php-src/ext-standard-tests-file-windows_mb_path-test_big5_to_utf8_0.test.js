// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_big5_to_utf8_0.phpt
  it("Test fopen() for reading big5 to UTF-8 path", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=big5\n#vim: set encoding=big5\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = iconv('big5', 'utf-8', \"���զh�r�`���|\"); // BIG5 string\n$prefix = create_data(\"file_big5\", $item);\n$fn = $prefix . DIRECTORY_SEPARATOR . \"$item\";\n$f = fopen($fn, 'r');\nif ($f) {\n    var_dump($f, fread($f, 42));\n    var_dump(fclose($f));\n} else {\n    echo \"open utf8 failed\\n\";\n}\nremove_data(\"file_big5\");\n?>")).toMatchSnapshot();
  });
});
