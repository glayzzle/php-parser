// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileInfo_getPerms_basic.phpt
  it("SPL: Spl File Info test getPerms", function () {
    expect(parser.parseCode("<?php\n//file\ntouch ('SplFileInfo_getPerms_basic.txt');\nchmod('SplFileInfo_getPerms_basic.txt', 0557);\n$fileInfo = new SplFileInfo('SplFileInfo_getPerms_basic.txt');\nvar_dump($fileInfo->getPerms() == 0100557);\n?>")).toMatchSnapshot();
  });
});
