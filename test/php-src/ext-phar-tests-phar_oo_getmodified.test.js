// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_getmodified.phpt
  it("Phar::getModified()", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = '<?php __HALT_COMPILER(); ?>';\n$files = array();\n$files['a'] = 'a';\n$files['b'] = 'b';\n$files['c'] = 'c';\ninclude 'files/phar_test.inc';\n$phar = new Phar($fname);\nvar_dump($phar->getModified());\n$phar->compressFiles(Phar::GZ);\nvar_dump($phar->getModified());\n?>")).toMatchSnapshot();
  });
});
