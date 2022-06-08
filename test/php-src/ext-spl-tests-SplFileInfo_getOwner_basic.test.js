// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileInfo_getOwner_basic.phpt
  it("SPL: SplFileInfo test getOwner", function () {
    expect(parser.parseCode("<?php\n$filename = __DIR__ . \"/SplFileInfo_getOwner_basic\";\ntouch($filename);\n$fileInfo = new SplFileInfo($filename);\n$expected = fileowner($filename);\n$actual = $fileInfo->getOwner();\nvar_dump($expected == $actual);\n?>")).toMatchSnapshot();
  });
});
