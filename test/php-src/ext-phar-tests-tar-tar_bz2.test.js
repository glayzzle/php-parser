// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/tar_bz2.phpt
  it("Phar: tar-based phar, bzipped tar", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . '/files/tarmaker.php.inc';\n$fname = __DIR__ . '/tar_bz2.phar';\n$alias = 'phar://' . $fname;\n$fname2 = __DIR__ . '/tar_bz2.phar.tar';\n$alias2 = 'phar://' . $fname2;\n$tar = new tarmaker($fname, 'bz2');\n$tar->init();\n$tar->addFile('tar_004.php', '<?php var_dump(__FILE__);');\n$tar->addFile('internal/file/here', \"hi there!\\n\");\n$tar->mkDir('internal/dir');\n$tar->mkDir('dir');\n$tar->addFile('.phar/stub.php', '<?php\nvar_dump(__FILE__);\nvar_dump(substr(__FILE__, 0, 4) != \"phar\");\nPhar::mapPhar();\nvar_dump(\"it worked\");\ninclude \"phar://\" . __FILE__ . \"/tar_004.php\";\n__HALT_COMPILER();\n');\n$tar->close();\ninclude $alias;\n$phar = new Phar($fname);\n$phar['test'] = 'hi';\ncopy($fname, $fname2);\n$phar2 = new Phar($fname2);\nvar_dump($phar2->isFileFormat(Phar::TAR));\nvar_dump($phar2->isCompressed() == Phar::BZ2);\n?>")).toMatchSnapshot();
  });
});
