// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/standard/tests/file/bug24482.phpt
  it("Bug #24482 (GLOB_ONLYDIR not working)", function () {
    expect(parser.parseCode("<?php\n// run this test in ext/standard/tests (see bug #64714)\nchdir(__DIR__); // ensure in ext/standard/tests/file\nchdir('..'); // move up to ext/standard/tests\n$globdirs = glob(\"*\", GLOB_ONLYDIR);\n$dirs = array();\n$dh = opendir(\".\");\nwhile (is_string($file = readdir($dh))) {\n    if ($file[0] === \".\") continue;\n    if (!is_dir($file)) continue;\n    $dirs[] = $file;\n}\nclosedir($dh);\nif (count($dirs) != count($globdirs)) {\n    echo \"Directory count mismatch\\n\";\n    echo \"glob found:\\n\";\n    sort($globdirs);\n    var_dump($globdirs);\n    echo \"opendir/readdir/isdir found:\\n\";\n    sort($dirs);\n    var_dump($dirs);\n} else {\n    echo \"OK\\n\";\n}\n?>")).toMatchSnapshot();
  });
});
