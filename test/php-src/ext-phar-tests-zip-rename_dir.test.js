// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/rename_dir.phpt
  it("Phar: rename_dir test zip-based", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip';\n$alias = 'phar://' . $fname;\n$phar = new Phar($fname);\n$phar->setStub(\"<?php\nPhar::mapPhar('hio');\n__HALT_COMPILER(); ?>\");\n$phar['a/x'] = 'a';\n$phar->stopBuffering();\ninclude $fname;\necho file_get_contents($alias . '/a/x') . \"\\n\";\nrename($alias . '/a', $alias . '/b');\necho file_get_contents($alias . '/b/x') . \"\\n\";\necho file_get_contents($alias . '/a/x') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
