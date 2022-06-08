// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp1254_to_utf8_0.phpt
  it("Test fopen() for reading cp1254 to UTF-8 path", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp1254\n#vim: set encoding=cp1254\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = \"çokbaytlı işleri\";\n$prefix = create_data(\"file_cp1254\", $item);\n$fn = $prefix . DIRECTORY_SEPARATOR . $item;\n$f = fopen($fn, 'r');\nif ($f) {\n    var_dump($f, fread($f, 42));\n    var_dump(fclose($f));\n} else {\n    echo \"open utf8 failed\\n\";\n}\nremove_data(\"file_cp1254\");\n?>")).toMatchSnapshot();
  });
});
