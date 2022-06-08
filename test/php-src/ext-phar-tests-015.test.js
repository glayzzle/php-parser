// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/015.phpt
  it("Phar::mapPhar valid file (gzipped)", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php __HALT_COMPILER(); ?>\";\n$files = array();\n$files['a'] = array('cont'=>'a','comp'=>chr(75) . chr(4) . chr(0) /* 'a' gzdeflated */, 'flags'=>0x00001000);\ninclude 'files/phar_test.inc';\necho file_get_contents($pname .'/a');\n?>")).toMatchSnapshot();
  });
});
