// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/020.phpt
  it("Phar: url stat", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = \"<?php\nPhar::mapPhar('hio');\n__HALT_COMPILER(); ?>\";\n$pfile = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$files = array();\n$files['a'] = 'a';\n$files['b/a'] = 'b';\n$files['b/c/d'] = 'c';\n$files['bad/c'] = 'd';\ninclude 'files/phar_test.inc';\ninclude $fname;\nvar_dump(stat('phar://hio/a'), stat('phar://hio/b'));\n?>")).toMatchSnapshot();
  });
});
