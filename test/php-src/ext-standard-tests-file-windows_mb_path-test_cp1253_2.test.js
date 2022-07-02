// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_cp1253_2.phpt
  it("Test fopen() for write cp1253", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=cp1253\n#vim: set encoding=cp1253\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$item = \"�������� �������\";\n$prefix = create_data(\"dir_cp1253\", \"${item}42}\", 1253);\n$fn = $prefix . DIRECTORY_SEPARATOR . \"${item}33\";\n$f = fopen($fn, 'w');\nif ($f) {\n    var_dump($f, fwrite($f, \"writing to an mb filename\"));\n    var_dump(fclose($f));\n} else {\n    echo \"open utf8 failed\\n\";\n}\nvar_dump(file_get_contents($fn));\nget_basename_with_cp($fn, 1253);\nremove_data(\"dir_cp1253\");\n?>")).toMatchSnapshot();
  });
});
