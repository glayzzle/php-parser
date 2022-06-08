// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/012.phpt
  it("Phar::mapPhar valid file", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php\nPhar::mapPhar('hio');\n__HALT_COMPILER(); ?>\";\n$files = array();\n$files['a'] = 'a';\ninclude 'files/phar_test.inc';\ninclude $fname;\necho file_get_contents('phar://hio/a');\n?>")).toMatchSnapshot();
  });
});
