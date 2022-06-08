// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/018.phpt
  it("Phar: opendir test, root directory", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php\nPhar::mapPhar('hio');\n__HALT_COMPILER(); ?>\";\n$files = array();\n$files['a'] = 'a';\n$files['b/a'] = 'b';\ninclude 'files/phar_test.inc';\ninclude $fname;\n$dir = opendir('phar://hio/');\nwhile (false !== ($a = readdir($dir))) {\n    var_dump($a);\n    var_dump(is_dir('phar://hio/' . $a));\n}\n?>")).toMatchSnapshot();
  });
});
