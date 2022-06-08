// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/tar_makebz2.phpt
  it("Phar: tar-based phar, make new bzipped tar", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/tar_makebz2.phar.tar';\n$fname2 = __DIR__ . '/tar_makebz2.phar.tar.bz2';\n$fname3 = __DIR__ . '/tar_makebz2_b.phar.tar.bz2';\n$phar = new Phar($fname);\n$phar['test'] = 'hi';\nvar_dump($phar->isFileFormat(Phar::TAR));\n$phar = $phar->compress(Phar::BZ2);\ncopy($fname2, $fname3);\n$phar2 = new Phar($fname3);\nvar_dump($phar2->isFileFormat(Phar::TAR));\nvar_dump($phar2->isCompressed() == Phar::BZ2);\n?>")).toMatchSnapshot();
  });
});
