// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/rmdir.phpt
  it("Phar: rmdir test", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php\nPhar::mapPhar('hio');\n__HALT_COMPILER(); ?>\";\n$files = array();\n$files['a/x'] = 'a';\ninclude 'files/phar_test.inc';\ninclude $fname;\necho file_get_contents($pname . '/a/x') . \"\\n\";\nvar_dump(rmdir($pname . '/a'));\necho file_get_contents($pname . '/a/x') . \"\\n\";\nunlink($pname . '/a/x');\nvar_dump(rmdir($pname . '/a'));\n?>")).toMatchSnapshot();
  });
});
