// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/windows_mb_path/test_long_path_0.phpt
  it("Basic long path test", function () {
    expect(parser.parseCode("<?php\n$p = \"\";\n$s = str_repeat('a', 50);\n$how_many = 32;\nfor ($i = 0; $i < $how_many; $i++) {\n    $p .= \"$s\";\n    $p .= DIRECTORY_SEPARATOR;\n}\n$p = realpath(__DIR__) . DIRECTORY_SEPARATOR . $p;\necho strlen($p), \"\\n\", $p, \"\\n\";\nvar_dump(mkdir($p, 0777, true));\nvar_dump(file_exists($p));\nfor ($i = 0; $i < $how_many; $i++) {\n    $p0 = substr($p, 0, strlen($p) - $i*51);\n    rmdir($p0);\n}\nvar_dump(file_exists(realpath(__DIR__) . DIRECTORY_SEPARATOR . $s));\n?>")).toMatchSnapshot();
  });
});
