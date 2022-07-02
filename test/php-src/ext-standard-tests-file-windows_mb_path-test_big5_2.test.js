// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_big5_2.phpt
  it("Test fopen() for write big5 to UTF-8 path", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=big5\n#vim: set encoding=big5\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = \"���զh�r�`���|\"; // BIG5 string\n$prefix = create_data(\"file_big5\", $item . \"25\", 950);\n$fn = $prefix . DIRECTORY_SEPARATOR . \"{$item}25\";\n$f = fopen($fn, 'w');\nif ($f) {\n    var_dump($f, fwrite($f, \"writing to an mb filename\"));\n    var_dump(fclose($f));\n} else {\n    echo \"open utf8 failed\\n\";\n}\nvar_dump(file_get_contents($fn));\nget_basename_with_cp($fn, 950);\nvar_dump(unlink($fn));\nremove_data(\"file_big5\");\n?>")).toMatchSnapshot();
  });
});
