// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/019.phpt
  it("Phar: opendir test, subdirectory", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php\nPhar::mapPhar('hio');\n__HALT_COMPILER(); ?>\";\n$files = array();\n$files['a'] = 'a';\n$files['b/a'] = 'b';\n$files['b/c/d'] = 'c';\n$files['bad/c'] = 'd';\ninclude 'files/phar_test.inc';\ninclude $fname;\n$dir = opendir('phar://hio/b');\nif ($dir) {\n    while (false !== ($a = readdir($dir))) {\n        var_dump($a);\n        var_dump(is_dir('phar://hio/b/' . $a));\n    }\n}\n?>")).toMatchSnapshot();
  });
});
