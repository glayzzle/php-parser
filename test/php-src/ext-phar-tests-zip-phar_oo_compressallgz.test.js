// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/phar_oo_compressallgz.phpt
  it("Phar::compressFiles(Phar::GZ) zip format", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip.php';\n$pname = 'phar://' . $fname;\n$phar = new Phar($fname);\n$phar['a'] = 'a';\n$phar['b'] = 'b';\n$phar['c'] = 'c';\nvar_dump(file_get_contents($pname . '/a'));\nvar_dump($phar['a']->isCompressed());\nvar_dump(file_get_contents($pname . '/b'));\nvar_dump($phar['b']->isCompressed());\nvar_dump(file_get_contents($pname . '/c'));\nvar_dump($phar['c']->isCompressed());\n$phar->compressFiles(Phar::GZ);\nvar_dump(file_get_contents($pname . '/a'));\nvar_dump($phar['a']->isCompressed(Phar::BZ2));\nvar_dump($phar['a']->isCompressed(Phar::GZ));\nvar_dump(file_get_contents($pname . '/b'));\nvar_dump($phar['b']->isCompressed(Phar::BZ2));\nvar_dump($phar['b']->isCompressed(Phar::GZ));\nvar_dump(file_get_contents($pname . '/c'));\nvar_dump($phar['b']->isCompressed(Phar::BZ2));\nvar_dump($phar['c']->isCompressed(Phar::GZ));\n?>")).toMatchSnapshot();
  });
});
