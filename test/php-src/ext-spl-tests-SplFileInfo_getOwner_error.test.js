// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileInfo_getOwner_error.phpt
  it("SPL: Spl File Info test getOwner", function () {
    expect(parser.parseCode("<?php\n//file\n$fileInfo = new SplFileInfo('not_existing');\nvar_dump($fileInfo->getOwner());\n?>")).toMatchSnapshot();
  });
});
