// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug60164.phpt
  it("Phar: verify stub of specific length does not break __HALT_COMPILER(); scanning in php", function () {
    expect(parser.parseCode("<?php\n$phar = __DIR__ . '/files/stuboflength1041.phar';\nforeach (new RecursiveIteratorIterator(new Phar($phar, alias: 'stuboflength1041.phar')) as $item) {\n    var_dump($item->getFileName());\n}\n?>")).toMatchSnapshot();
  });
});
