// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/bug64506.phpt
  it("", function () {
    expect(parser.parseCode("<?php\n/*\n#vim: set fileencoding=UTF-8\n#vim: set encoding=UTF-8\n*/\ninclude __DIR__ . DIRECTORY_SEPARATOR . \"util.inc\";\n$fnw = __DIR__ . DIRECTORY_SEPARATOR . \"š.txt\"; // UTF-8\n$f = fopen($fnw, 'w');\nif ($f) {\n    var_dump($f, fwrite($f, \"writing to an mb filename\"));\n} else {\n    echo \"open utf8 failed\\n\";\n}\nvar_dump(fclose($f));\nvar_dump(file_get_contents($fnw));\nget_basename_with_cp($fnw, 65001);\nvar_dump(unlink($fnw));\n?>")).toMatchSnapshot();
  });
});
