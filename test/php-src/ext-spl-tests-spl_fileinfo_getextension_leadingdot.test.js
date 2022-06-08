// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_fileinfo_getextension_leadingdot.phpt
  it("SPL: Spl File Info test getExtension with leading dot", function () {
    expect(parser.parseCode("<?php\n$file = __DIR__ . '/.test';\ntouch($file);\n$fileInfo = new SplFileInfo($file);\nvar_dump($fileInfo->getExtension());\nunlink($file);\n?>")).toMatchSnapshot();
  });
});
