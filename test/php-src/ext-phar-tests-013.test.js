// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/013.phpt
  it("Phar::mapPhar filesize mismatch", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php __HALT_COMPILER(); ?>\";\n// filesize should be 1, and is 2\n$files = array();\n$files['a'] = array('cont'=>'a', 'ulen'=>2, 'clen'=>2);\ninclude 'files/phar_test.inc';\necho file_get_contents($pname.'/a');\n?>")).toMatchSnapshot();
  });
});
