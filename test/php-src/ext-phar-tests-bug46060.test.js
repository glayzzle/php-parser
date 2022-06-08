// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug46060.phpt
  it("Phar: Bug #46060: addEmptyDir() breaks", function () {
    expect(parser.parseCode("<?php\n$fname = __DIR__ . '/' . basename(__FILE__, '.php') . '.tar';\n$fname2 = __DIR__ . '/' . basename(__FILE__, '.php') . '.2.tar';\n$phar = new PharData($fname);\n$phar->addEmptyDir('blah/');\n$phar->addFromString('test/', '');\ncopy($fname, $fname2);\n$phar = new PharData($fname2);\nvar_dump($phar['blah']->isDir(), $phar['test']->isDir());\n?>")).toMatchSnapshot();
  });
});
