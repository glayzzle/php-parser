// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/phar/tests/bug76584.phpt
  it("Bug #76584 (PharFileInfo::decompress not working)", function () {
    expect(parser.parseCode("<?php\n$phar = new Phar(__DIR__ . '/76584.phar');\n$phar->addFromString('76584.txt', 'This is a test file.');\n$file = $phar['76584.txt'];\nvar_dump($file->compress(Phar::GZ));\nvar_dump($file->isCompressed());\nvar_dump($file->decompress());\nvar_dump($file->isCompressed());\nmkdir(__DIR__ . '/76584');\nvar_dump($phar->extractTo(__DIR__ . '/76584'));\necho file_get_contents(__DIR__ . '/76584/76584.txt');\n?>")).toMatchSnapshot();
  });
});
