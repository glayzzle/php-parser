// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/zip/delete.phpt
  it("Phar: delete test, zip-based phar", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.zip';\n$alias = 'phar://' . $fname;\n$file = \"<?php\nPhar::mapPhar('hio');\n__HALT_COMPILER(); ?>\";\n$phar = new Phar($fname);\n$phar['a'] = 'a';\n$phar->setStub($file);\n$phar->stopBuffering();\necho file_get_contents($alias . '/a') . \"\\n\";\n$phar->delete('a');\necho file_get_contents($alias . '/a') . \"\\n\";\n?>")).toMatchSnapshot();
  });
});
