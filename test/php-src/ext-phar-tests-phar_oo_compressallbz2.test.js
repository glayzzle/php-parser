// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_compressallbz2.phpt
  it("Phar::compressFiles(Phar::BZ2)", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = '<?php __HALT_COMPILER(); ?>';\n$files = array();\n$files['a'] = 'a';\n$files['b'] = 'b';\n$files['c'] = 'c';\ninclude 'files/phar_test.inc';\n$phar = new Phar($fname);\nvar_dump(file_get_contents($pname . '/a'));\nvar_dump($phar['a']->isCompressed());\nvar_dump(file_get_contents($pname . '/b'));\nvar_dump($phar['b']->isCompressed());\nvar_dump(file_get_contents($pname . '/c'));\nvar_dump($phar['c']->isCompressed());\n$phar = new Phar($fname);\n$phar->compressFiles(Phar::BZ2);\nvar_dump(file_get_contents($pname . '/a'));\nvar_dump($phar['a']->isCompressed(Phar::GZ));\nvar_dump($phar['a']->isCompressed(Phar::BZ2));\nvar_dump(file_get_contents($pname . '/b'));\nvar_dump($phar['b']->isCompressed(Phar::GZ));\nvar_dump($phar['b']->isCompressed(Phar::BZ2));\nvar_dump(file_get_contents($pname . '/c'));\nvar_dump($phar['c']->isCompressed(Phar::GZ));\nvar_dump($phar['b']->isCompressed(Phar::BZ2));\n?>")).toMatchSnapshot();
  });
});
