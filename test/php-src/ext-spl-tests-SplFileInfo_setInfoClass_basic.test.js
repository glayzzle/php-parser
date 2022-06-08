// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileInfo_setInfoClass_basic.phpt
  it("SplFileInfo::setInfoClass() expects SplFileInfo or child class", function () {
    expect(parser.parseCode("<?php\nclass MyInfoObject extends SplFileInfo {}\n$info = new SplFileInfo(__FILE__);\n$info->setInfoClass('MyInfoObject');\necho get_class($info->getFileInfo()), \"\\n\";\necho get_class($info->getPathInfo()), \"\\n\";\n$info->setInfoClass('SplFileInfo');\necho get_class($info->getFileInfo()), \"\\n\";\necho get_class($info->getPathInfo()), \"\\n\";\n?>")).toMatchSnapshot();
  });
});
