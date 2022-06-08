// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/rmdir.phpt
  it("Phar: rmdir test tar-based", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . '/files/tarmaker.php.inc';\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.tar';\n$alias = 'phar://' . $fname;\n$tar = new tarmaker($fname, 'none');\n$tar->init();\n$tar->addFile('.phar/stub.php', \"<?php\nPhar::mapPhar('hio');\n__HALT_COMPILER(); ?>\");\n$files = array();\n$files['a/x'] = 'a';\nforeach ($files as $n => $file) {\n    $tar->addFile($n, $file);\n}\n$tar->mkdir('a');\n$tar->close();\ninclude $fname;\necho file_get_contents($alias . '/a/x') . \"\\n\";\nvar_dump(rmdir($alias . '/a'));\necho file_get_contents($alias . '/a/x') . \"\\n\";\nunlink($alias . '/a/x');\nvar_dump(rmdir($alias . '/a'));\n?>")).toMatchSnapshot();
  });
});
