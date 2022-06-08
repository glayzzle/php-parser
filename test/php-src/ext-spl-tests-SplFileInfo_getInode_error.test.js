// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileInfo_getInode_error.phpt
  it("SPL: Spl File Info test getPerms", function () {
    expect(parser.parseCode("<?php\n//file\n$fileInfo = new SplFileInfo('not_existing');\nvar_dump($fileInfo->getInode());\n?>")).toMatchSnapshot();
  });
});
