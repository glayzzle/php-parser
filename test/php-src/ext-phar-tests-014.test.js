// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/014.phpt
  it("Phar::mapPhar filesize mismatch", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php __HALT_COMPILER(); ?>\";\n// wrong crc32\n$files = array();\n$files['a'] = array('cont'=>'a', 'crc32'=>crc32('aX'));\ninclude 'files/phar_test.inc';\necho file_get_contents($pname.'/a');\n?>")).toMatchSnapshot();
  });
});
