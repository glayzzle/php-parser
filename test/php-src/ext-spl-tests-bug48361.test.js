// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug48361.phpt
  it("SPL: Bug #48361 SpleFileInfo::getPathName should return the dirname's path", function () {
    expect(parser.parseCode("<?php\n$info = new SplFileInfo(__FILE__);\nvar_dump($info->getRealPath());\nvar_dump($info->getPathInfo()->getRealPath());\n?>")).toMatchSnapshot();
  });
});
