// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/phar_oo_compressed_001.phpt
  it("Phar: PharFileInfo::compress(Phar::GZ)", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.php';\n$pname = 'phar://' . $fname;\n$file = '<?php __HALT_COMPILER(); ?>';\n$files = array();\n$files['a'] = 'a';\n$files['b'] = 'b';\n$files['c'] = 'c';\ninclude 'files/phar_test.inc';\n$phar = new Phar($fname);\nvar_dump(file_get_contents($pname . '/a'));\nvar_dump($phar['a']->isCompressed());\nvar_dump(file_get_contents($pname . '/b'));\nvar_dump($phar['b']->isCompressed());\nvar_dump(file_get_contents($pname . '/c'));\nvar_dump($phar['c']->isCompressed());\n$phar['a'] = 'new a';\n$phar['a']->decompress();\n$phar['b'] = 'new b';\n$phar['b']->compress(Phar::GZ);\n$phar['d'] = 'new d';\n$phar = new Phar($fname);\nvar_dump(file_get_contents($pname . '/a'));\nvar_dump($phar['a']->isCompressed());\nvar_dump(file_get_contents($pname . '/b'));\nvar_dump($phar['b']->isCompressed());\nvar_dump(file_get_contents($pname . '/c'));\nvar_dump($phar['c']->isCompressed());\nvar_dump(file_get_contents($pname . '/d'));\nvar_dump($phar['d']->isCompressed());\n?>")).toMatchSnapshot();
  });
});
