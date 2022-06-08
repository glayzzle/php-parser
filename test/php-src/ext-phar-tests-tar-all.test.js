// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/tar/all.phpt
  it("Phar: test that creation of tar-based phar generates valid tar with all bells/whistles", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.phar.tar.php';\n$pname = 'phar://' . $fname;\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.2.phar.tar.php';\n$pname2 = 'phar://' . $fname2;\n$phar = new Phar($fname);\n$phar->setMetadata('hi there');\n$phar['a'] = 'hi';\n$phar['a']->setMetadata('a meta');\n$phar['b'] = 'hi2';\n$phar['c'] = 'hi3';\n$phar['b']->chmod(0444);\n$phar->setStub(\"<?php ok __HALT_COMPILER();\");\n$phar->setAlias(\"hime\");\nunset($phar);\ncopy($fname, $fname2);\nPhar::unlinkArchive($fname);\nvar_dump(file_exists($fname), file_exists($pname . '/a'));\n$phar = new Phar($fname2);\nvar_dump($phar['a']->getContent(), $phar['b']->getContent(), $phar['c']->getContent());\nvar_dump((string) decoct(fileperms($pname2 . '/b')));\nvar_dump($phar->getStub());\nvar_dump($phar->getAlias());\nvar_dump($phar->getMetadata());\nvar_dump($phar['a']->getMetadata());\n?>")).toMatchSnapshot();
  });
});
