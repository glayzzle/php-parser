// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/phar_oo_compressallbz2.phpt
  it("Phar::compressFiles(Phar::BZ2) zip format", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip.php';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip';\n$pname = 'phar://' . $fname;\n$pname2 = 'phar://' . $fname2;\n$phar = new Phar($fname);\n$phar['a'] = 'a';\n$phar['b'] = 'b';\n$phar['c'] = 'c';\nvar_dump(file_get_contents($pname . '/a'));\nvar_dump($phar['a']->isCompressed());\nvar_dump(file_get_contents($pname . '/b'));\nvar_dump($phar['b']->isCompressed());\nvar_dump(file_get_contents($pname . '/c'));\nvar_dump($phar['c']->isCompressed());\n$phar->compressFiles(Phar::BZ2);\nvar_dump(file_get_contents($pname . '/a'));\nvar_dump($phar['a']->isCompressed(Phar::GZ));\nvar_dump($phar['a']->isCompressed(Phar::BZ2));\nvar_dump(file_get_contents($pname . '/b'));\nvar_dump($phar['b']->isCompressed(Phar::GZ));\nvar_dump($phar['b']->isCompressed(Phar::BZ2));\nvar_dump(file_get_contents($pname . '/c'));\nvar_dump($phar['c']->isCompressed(Phar::GZ));\nvar_dump($phar['b']->isCompressed(Phar::BZ2));\n$phar['d'] = 'hi'; // increases code coverage by having ufp open\ncopy($fname, $fname2);\n$c = new Phar($fname2);\nvar_dump(file_get_contents($pname2 . '/a'));\nvar_dump($c['a']->isCompressed(Phar::GZ));\nvar_dump($c['a']->isCompressed(Phar::BZ2));\n?>")).toMatchSnapshot();
  });
});
