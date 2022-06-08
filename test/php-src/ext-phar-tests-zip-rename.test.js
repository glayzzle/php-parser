// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/rename.phpt
  it("Phar: rename test zip-based", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip';\n$alias = 'phar://' . $fname;\n$phar = new Phar($fname);\n$phar->setStub(\"<?php\nPhar::mapPhar('hio');\n__HALT_COMPILER(); ?>\");\n$phar['a'] = 'a';\n$phar->stopBuffering();\ninclude $fname;\necho file_get_contents($alias . '/a') . \"\\n\";\nrename($alias . '/a', $alias . '/b');\necho file_get_contents($alias . '/b') . \"\\n\";\necho file_get_contents($alias . '/a') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
