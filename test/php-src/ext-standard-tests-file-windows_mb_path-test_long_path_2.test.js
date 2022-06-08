// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_long_path_2.phpt
  it("Basic long path test with file I/O, multibyte path and realpath() check", function () {
    expect(parser.parseCode("<?php\n$p = \"\";\n$s = str_repeat('x', 50) . \"ü\";\n$how_many = 32;\nfor ($i = 0; $i < $how_many; $i++) {\n    $p .= \"$s\";\n    $p .= DIRECTORY_SEPARATOR;\n}\n/* path doesn't exist at this point! */\n$p = realpath(__DIR__) . DIRECTORY_SEPARATOR . $p;\necho strlen($p), \"\\n\", $p, \"\\n\";\nvar_dump(mkdir($p, 0777, true));\nvar_dump(file_exists($p));\n/* path exists now, ensure realpath() works! */\n$p2 = realpath($p);\nvar_dump($p2);\n/* realpath() will cut off the trailing slash */\nvar_dump(substr($p, 0, strlen($p) - 1) == $p2);\n$p7 = $p . \"hello.txt\";\nvar_dump(file_put_contents($p7, \"hello\"));\nvar_dump(file_get_contents($p7));\nunlink($p7);\nfor ($i = 0; $i < $how_many; $i++) {\n    $p0 = substr($p, 0, strlen($p) - $i*(strlen($s) + 1));\n    rmdir($p0);\n}\nvar_dump(file_exists(realpath(__DIR__) . DIRECTORY_SEPARATOR . $s));\n?>")).toMatchSnapshot();
  });
});
