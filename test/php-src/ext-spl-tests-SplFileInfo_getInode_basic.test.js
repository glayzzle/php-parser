// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileInfo_getInode_basic.phpt
  it("SPL: Spl File Info test getInode", function () {
    expect(parser.parseCode("<?php\n//file\ntouch ('SplFileInfo_getInode_basic.txt');\n$fileInfo = new SplFileInfo('SplFileInfo_getInode_basic.txt');\n$result = shell_exec('ls -i SplFileInfo_getInode_basic.txt');\nvar_dump($fileInfo->getInode() == (int) $result);\n?>")).toMatchSnapshot();
  });
});
