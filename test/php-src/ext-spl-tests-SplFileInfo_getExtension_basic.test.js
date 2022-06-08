// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/SplFileInfo_getExtension_basic.phpt
  it("SPL: SplFileInfo::getExtension() basic test", function () {
    expect(parser.parseCode("<?php\n$file = md5('SplFileInfo::getExtension');\n$exts = array('.txt', '.extension', '..', '.', '');\nforeach ($exts as $ext) {\n    touch($file . $ext);\n    $info = new SplFileInfo($file . $ext);\n    var_dump($info->getExtension(), pathinfo($file . $ext, PATHINFO_EXTENSION));\n}\n?>")).toMatchSnapshot();
  });
});
