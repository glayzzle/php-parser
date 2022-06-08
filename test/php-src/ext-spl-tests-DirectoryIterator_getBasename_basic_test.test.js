// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/DirectoryIterator_getBasename_basic_test.phpt
  it("DirectoryIterator::getBasename() - Basic Test", function () {
    expect(parser.parseCode("<?php\n   $targetDir = __DIR__.DIRECTORY_SEPARATOR.md5('directoryIterator::getbasename1');\n   mkdir($targetDir);\n   touch($targetDir.DIRECTORY_SEPARATOR.'getBasename_test.txt');\n   $dir = new DirectoryIterator($targetDir.DIRECTORY_SEPARATOR);\n   while(!$dir->isFile()) {\n      $dir->next();\n   }\n   echo $dir->getBasename('.txt');\n?>")).toMatchSnapshot();
  });
});
