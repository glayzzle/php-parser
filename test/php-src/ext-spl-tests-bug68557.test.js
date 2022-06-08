// eslint-disable prettier/prettier
const parser = require("../main");

describe("php-src tests", function () {
  // ext/spl/tests/bug68557.phpt
  it("Bug #68557 (SplFileInfo::getPathname() may be broken)", function () {
    expect(parser.parseCode("<?php\nmkdir(__DIR__ . DIRECTORY_SEPARATOR . 'tmp');\ntouch(__DIR__ . DIRECTORY_SEPARATOR . 'tmp' . DIRECTORY_SEPARATOR . 'a');\ntouch(__DIR__ . DIRECTORY_SEPARATOR . 'tmp' . DIRECTORY_SEPARATOR . 'b');\n$d = new DirectoryIterator(__DIR__ . DIRECTORY_SEPARATOR . 'tmp');\n$d->seek(0);\n$path0 = $d->current()->getPathname();\n$d->seek(1);\n$path1 = $d->current()->getPathname();\n$d->seek(2);\n$path2 = $d->current()->getPathname();\n$d->seek(0);\nvar_dump($path0 === $d->current()->getPathname());\n$d->seek(1);\nvar_dump($path1 === $d->current()->getPathname());\n$d->seek(2);\nvar_dump($path2 === $d->current()->getPathname());\n$d->seek(0);\nvar_dump($path0 === $d->current()->getPathname());\n?>")).toMatchSnapshot();
  });
});
