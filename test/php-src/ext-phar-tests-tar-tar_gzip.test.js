// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/tar_gzip.phpt
  it("Phar: tar-based phar, gzipped tar", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . '/files/tarmaker.php.inc';\n$fname = __DIR__ . '/tar_gzip.phar';\n$pname = 'phar://' . $fname;\n$fname2 = __DIR__ . '/tar_gzip.phar.tar';\n$pname2 = 'phar://' . $fname2;\n$a = new tarmaker($fname, 'zlib');\n$a->init();\n$a->addFile('tar_004.php', '<?php var_dump(__FILE__);');\n$a->addFile('internal/file/here', \"hi there!\\n\");\n$a->mkDir('internal/dir');\n$a->mkDir('dir');\n$a->addFile('.phar/stub.php', '<?php\nPhar::mapPhar();\nvar_dump(\"it worked\");\ninclude \"phar://\" . __FILE__ . \"/tar_004.php\";\n');\n$a->close();\ninclude $fname;\n$a = new Phar($fname);\n$a['test'] = 'hi';\ncopy($fname, $fname2);\n$b = new Phar($fname2);\nvar_dump($b->isFileFormat(Phar::TAR));\nvar_dump($b->isCompressed() == Phar::GZ);\n?>")).toMatchSnapshot();
  });
});
