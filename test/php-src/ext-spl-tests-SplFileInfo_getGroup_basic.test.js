// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileInfo_getGroup_basic.phpt
  it("SPL: SplFileInfo test getGroup", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . \"/SplFileInfo_getGroup_basic\";\ntouch($filename);\n$fileInfo = new SplFileInfo($filename);\n$expected = filegroup($filename);\n$actual = $fileInfo->getGroup();\nvar_dump($expected == $actual);\n?>")).toMatchSnapshot();
  });
});
