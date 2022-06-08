// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug51374.phpt
  it("SPL: SplFileObject wrongly initializes objects", function () {
    expect(parser.parseCode("<?php\nclass Foo extends SplFileObject\n{\n    public $bam = array();\n}\n$fileInfo = new SplFileInfo('php://temp');\n$fileInfo->setFileClass('Foo');\n$file = $fileInfo->openFile('r');\nprint var_dump($file->bam); // is null or UNKNOWN:0\n?>")).toMatchSnapshot();
  });
});
