// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/rmdir.phpt
  it("Phar: rmdir test zip-based", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip';\n$alias = 'phar://' . $fname;\n$phar = new Phar($fname);\n$phar->setStub(\"<?php\nPhar::mapPhar('hio');\n__HALT_COMPILER(); ?>\");\n$phar->addEmptyDir('a');\n$phar['a/x'] = 'a';\n$phar->stopBuffering();\ninclude $fname;\necho file_get_contents($alias . '/a/x') . \"\\n\";\nvar_dump(rmdir($alias . '/a'));\necho file_get_contents($alias . '/a/x') . \"\\n\";\nunlink($alias . '/a/x');\nvar_dump(rmdir($alias . '/a'));\n?>")).toMatchSnapshot();
  });
});
