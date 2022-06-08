// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/017.phpt
  it("Phar: opendir test - no dir specified at all", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php\nPhar::mapPhar('hio');\nvar_dump(__FILE__);\nvar_dump(substr(__FILE__, 0, 4) != 'phar');\n__HALT_COMPILER(); ?>\";\n$files = array();\n$files['a'] = 'abc';\ninclude 'files/phar_test.inc';\ninclude $pname;\n$dir = opendir('phar://hio');\n?>")).toMatchSnapshot();
  });
});
