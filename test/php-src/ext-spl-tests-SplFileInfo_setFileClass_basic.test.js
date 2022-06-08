// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileInfo_setFileClass_basic.phpt
  it("SplFileInfo::setFileClass() expects SplFileObject or child class", function () {
    expect(parser.parseCode("<?php\nclass MyFileObject extends SplFileObject {}\n$info = new SplFileInfo(__FILE__);\n$info->setFileClass('MyFileObject');\necho get_class($info->openFile()), \"\\n\";\n$info->setFileClass('SplFileObject');\necho get_class($info->openFile()), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
