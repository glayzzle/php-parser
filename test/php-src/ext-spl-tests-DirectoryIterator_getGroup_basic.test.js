// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/DirectoryIterator_getGroup_basic.phpt
  it("SPL: DirectoryIterator test getGroup", function () {
    expect(parser.parseCode("<?php\n$dirname = 'DirectoryIterator_getGroup_basic';\nmkdir($dirname);\n$dir = new DirectoryIterator($dirname);\n$expected = filegroup($dirname);\n$actual = $dir->getGroup();\nvar_dump($expected == $actual);\n?>")).toMatchSnapshot();
  });
});
