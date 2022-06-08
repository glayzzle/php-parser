// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/DirectoryIterator_getOwner_basic.phpt
  it("SPL: DirectoryIterator test getOwner", function () {
    expect(parser.parseCode("<?php\n$dirname = 'DirectoryIterator_getOwner_basic';\nmkdir($dirname);\n$dir = new DirectoryIterator($dirname);\n$expected = fileowner($dirname);\n$actual = $dir->getOwner();\nvar_dump($expected == $actual);\n?>")).toMatchSnapshot();
  });
});
