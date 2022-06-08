// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/rename_dir.phpt
  it("Phar: rename_dir test tar-based", function () {
    expect(parser.parseCode("<?php\ninclude __DIR__ . '/files/tarmaker.php.inc';\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.tar';\n$alias = 'phar://' . $fname;\n$tar = new tarmaker($fname, 'none');\n$tar->init();\n$tar->addFile('.phar/stub.php', \"<?php\nPhar::mapPhar('hio');\n__HALT_COMPILER(); ?>\");\n$files = array();\n$files['a/x'] = 'a';\nforeach ($files as $n => $file) {\n    $tar->addFile($n, $file);\n}\n$tar->close();\ninclude $fname;\necho file_get_contents($alias . '/a/x') . \"\\n\";\nrename($alias . '/a', $alias . '/b');\necho file_get_contents($alias . '/b/x') . \"\\n\";\necho file_get_contents($alias . '/a/x') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
