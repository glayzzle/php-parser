// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/tar_makegz.phpt
  it("Phar: tar-based phar, make new gzipped tar", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/tar_makegz.phar.tar';\n$fname2 = __DIR__ . '/tar_makegz.phar.tar.gz';\n$fname3 = __DIR__ . '/tar_makegz_b.phar.tar.gz';\n$phar = new Phar($fname);\n$phar['test'] = 'hi';\nvar_dump($phar->isFileFormat(Phar::TAR));\n$phar = $phar->compress(Phar::GZ);\ncopy($fname2, $fname3);\n$phar2 = new Phar($fname3);\nvar_dump($phar2->isFileFormat(Phar::TAR));\nvar_dump($phar2->isCompressed() == Phar::GZ);\n?>")).toMatchSnapshot();
  });
});
