// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/rename_dir.phpt
  it("Phar: rename_dir test", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php\nPhar::mapPhar('hio');\n__HALT_COMPILER(); ?>\";\n$files = array();\n$files['a/x'] = 'a';\ninclude 'files/phar_test.inc';\ninclude $fname;\necho file_get_contents($pname . '/a/x') . \"\\n\";\nrename($pname . '/a', $pname . '/b');\necho file_get_contents($pname . '/b/x') . \"\\n\";\necho file_get_contents($pname . '/a/x') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
