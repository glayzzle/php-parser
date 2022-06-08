// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/tar_004.phpt
  it("Phar: tar-based phar, tar phar with stub, mapPhar()", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . '/files/tarmaker.php.inc';\n$fname = __DIR__ . '/tar_004.phar.tar';\n$alias = 'phar://' . $fname;\n$tar = new tarmaker($fname, 'none');\n$tar->init();\n$tar->addFile('tar_004.php', '<?php var_dump(__FILE__);');\n$tar->addFile('internal/file/here', \"hi there!\\n\");\n$tar->mkDir('internal/dir');\n$tar->mkDir('dir');\n$tar->addFile('.phar/stub.php', '<?php\nPhar::mapPhar();\nvar_dump(\"it worked\");\ninclude \"phar://\" . __FILE__ . \"/tar_004.php\";\n');\n$tar->close();\ninclude $fname;\n?>")).toMatchSnapshot();
  });
});
