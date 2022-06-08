// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/016b.phpt
  it("Phar::mapPhar invalid file (gzipped file length is too short)", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php __HALT_COMPILER(); ?>\";\n// file length is too short\n$files = array();\n$files['a'] = array('cont'=>'a','flags'=>0x00001000, 'clen' => 1);\ninclude 'files/phar_test.inc';\necho file_get_contents($pname . '/a');\n?>")).toMatchSnapshot();
  });
});
