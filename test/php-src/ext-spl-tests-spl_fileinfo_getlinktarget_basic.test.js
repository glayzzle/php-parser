// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/spl_fileinfo_getlinktarget_basic.phpt
  it("SPL: Spl File Info test getLinkTarget", function () {
    expect(parser.parseCode("<?php\n$link = __DIR__ . '/test_link';\nsymlink(__FILE__, $link );\n$fileInfo = new SplFileInfo($link);\nif ($fileInfo->isLink()) {\n    echo $fileInfo->getLinkTarget() == __FILE__ ? 'same' : 'different',PHP_EOL;\n}\nvar_dump(unlink($link));\n?>")).toMatchSnapshot();
  });
});
