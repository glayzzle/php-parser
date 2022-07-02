// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_long_path_mkdir.phpt
  it("Mkdir with path length < 260 and > 248 has be a long path", function () {
    expect(parser.parseCode("<?php\n$p = \"\";\n$s = str_repeat('a', 50);\n$how_many = 32;\nfor ($i = 0; $i < $how_many; $i++) {\n    $p .= \"$s\\\\\";\n}\n$start = realpath(__DIR__);\n$newstart = false;\nif (strlen($start) <= 248) {\n    // create the exact length\n    $start = $start . \"\\\\\" . str_repeat('a', 251 - strlen($start) - 1);\n    $newstart = true;\n}\nvar_dump($start);\n$p = $start . \"\\\\\" . $p;\nvar_dump($p);\nvar_dump(mkdir($p, 0777, true));\nvar_dump(file_exists($p));\n$p7 = $p . \"hello.txt\";\nvar_dump(file_put_contents($p7, \"hello\"));\nvar_dump(file_get_contents($p7));\n// cleanup\nunlink($p7);\nfor ($i = 0; $i < $how_many; $i++) {\n    $p0 = substr($p, 0, strlen($p) - $i*51);\n    rmdir($p0);\n}\nif ($newstart) {\n    rmdir($start);\n}\n?>")).toMatchSnapshot();
  });
});
